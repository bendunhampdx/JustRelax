using Microsoft.AspNetCore.Mvc;
using JustRelax.Models;
using System.Linq;
using System.Collections.Generic;

namespace JustRelax.Controllers
{
  public class HomeController : Controller
  {
    private readonly JustRelaxContext _db;

    public HomeController(JustRelaxContext db)
    {
      _db = db;
    }

    [HttpGet("/")]
    public ActionResult Index() 
    { 
      return View(); 
    }

    public ActionResult Create()
    {
      return View();
    }

    [HttpPost]
    public ActionResult Create(Player player)
    {
      _db.Players.Add(player);
      _db.SaveChanges();
      return RedirectToAction("Game", new {id=player.PlayerId});
    }

    public ActionResult Game(int id)
    {
      Player thisPlayer = _db.Players.FirstOrDefault(player => player.PlayerId == id);
      return View(thisPlayer);
    }
  }
}