using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using System.Collections.Generic;
using System.Media;

namespace JustRelax
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var host = new WebHostBuilder()
        .UseKestrel()
        .UseContentRoot(Directory.GetCurrentDirectory())
        .UseIISIntegration()
        .UseStartup<Startup>()
        .Build();

      host.Run();
      
      Program program = new Program();
      
      program.Intro();
    }
    public void Intro()
    {
      Console.WriteLine("Hello students! Welcome to  ~Spepicodus~ programming bootcamp!");
      Console.WriteLine("My name is ~Spames~ and I will be your instructor for this course.");
      Console.WriteLine("This bootcamp is designed to challenge those who have little to no experience with programming, so remember that it's alright to feel lost at times.");
      Console.WriteLine("It can be hard to stay focused so I reccomend listening to background music as you code. This is my favorite coding music:");
    }
  }
}
