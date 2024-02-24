﻿using Core.LogModule;
using Core.RuntimeObject;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.FileProviders;
using Microsoft.OpenApi.Models;
using System.Reflection;
using Microsoft.Extensions.Logging;
using Core;

namespace CLI
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //注册DDTV主要服务
            Task.Run(() => Service.CreateHostBuilder(new string[] { "" }).Build().Run());
            Thread.Sleep(1000*3);
            WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
            builder.Logging.AddFilter((category, level) =>
            {
                return level >= LogLevel.Warning;
            });

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "DDTV5_API",
                    License = new OpenApiLicense
                    {
                        Name = "[项目地址]",
                        Url = new Uri("https://github.com/CHKZL/DDTV")
                    }
                });
                var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
            });
            builder.Services.AddMvc();


            var app = builder.Build();
            app.UseSwagger();
            app.UseSwaggerUI();
            app.UseMiddleware<WebAppServices.Middleware.AccessControl>();
            //app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();
            app.UseStatusCodePagesWithRedirects("/api/not_found");
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Core.Tools.FileOperations.CreateAll(Path.GetFullPath(Config.Web._WebUiDirectory))),
                RequestPath = ""
            });
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Core.Tools.FileOperations.CreateAll(Path.GetFullPath(Config.Core._RecFileDirectory))),
                RequestPath = Config.Web._RecordingStorageDirectory
            });
            string rurl = $"http://0.0.0.0:11419";
            app.Urls.Add(rurl);
            Log.Info(nameof(Main), $"WebApplication开始运行，开始监听[{rurl}]");
            app.Run();
        }

        public class Service
        {
            public static IHostBuilder CreateHostBuilder(string[] args) =>
                Host.CreateDefaultBuilder(args)
                .UseWindowsService()
                .ConfigureServices((hostContext, services) =>
                {
                    services.AddHostedService<DDTVService>();
                });
            public class DDTVService : BackgroundService
            {
                protected override Task ExecuteAsync(CancellationToken stoppingToken)
                {
                    return Task.Run(async () =>
                    {
                        Core.Init.Start();//初始化必须执行的
                        if (!Account.AccountInformation.State)
                        {
                            Log.Info(nameof(DDTVService),"\r\n当前状态:未登录\r\n" +
                                "使用前须知：\r\n" +
                                "1、在使用本软件的过程中的产生的任何资料、数据等所有数据都归属原所有者。\r\n" +
                                "2、本软件所使用的所有资源，以及服务，均搜集自互联网，版权属于相应的个体，我们只是基于互联网使用了公开的资源进行开发。\r\n" +
                                "3、本软件所登陆的阿B账号仅保存在您本地，且只会用于和阿B的服务接口交互。\r\n" +
                                "\r\n如果您了解且同意以上内容，请按Y进入登陆流程，按其他任意键退出\r\n");

                            Task.Run(() =>
                            {
                                while (true)
                                {
                                    ConsoleKeyInfo keyInfo = Console.ReadKey();
                                    if (keyInfo.Key != ConsoleKey.Y)
                                    {
                                        if (!Core.Config.Core._UseAgree)
                                        {
                                            // 用户按了其他键，退出程序
                                            Console.WriteLine("\n哔哩哔哩 (゜-゜)つロ 干杯~");
                                            Environment.Exit(0);
                                        }
                                        else
                                        {
                                            return;
                                        }
                                    }
                                    else if (keyInfo.Key == ConsoleKey.Y && !Core.Config.Core._UseAgree)
                                    {
                                        Core.Config.Core._UseAgree = true;
                                        return;
                                    }
                                    else
                                    {
                                        return;
                                    }
                                }
                            });

                            while (!Core.Config.Core._UseAgree)
                            {
                                Thread.Sleep(500);
                            }
                            await Login.QR();//如果没有登录态，需要执行扫码
                        }
                        while (!Account.AccountInformation.State)
                        {
                            Thread.Sleep(1000);//等待登陆
                        }
                        TerminalDisplay.SeKey();
                        Detect detect = new();//启动房间监听并且注册事件
                        
                        //TEST();

                        Task.Run(() =>
                        {
                            while (true)
                            {
                                var doki = Core.Tools.DokiDoki.GetDoki();
                                Log.Info("DokiDoki", $"总:{doki.Total}|录制中:{doki.Downloading}|使用内存:{doki.UsingMemoryStr}|{doki.InitType}|{doki.Ver}【{doki.Mode}】(编译时间:{doki.CompiledVersion})");
                                if (doki.UsingMemory > 4294967296)
                                {
                                    Environment.Exit(-114514);
                                }
#if DEBUG
                                Thread.Sleep(60 * 1000);
#else
                                Thread.Sleep(300 * 1000);
#endif
                            }
                        });

                    });
                }

                public override Task StopAsync(CancellationToken stoppingToken)
                {
                    return Task.Run(() =>
                    {
                        Log.Warn(nameof(DDTVService), "收到SIGINT信号(一般是用户Ctrl+C)，主进程被系统结束");
                    });
                }
            }
        }
    }
}
