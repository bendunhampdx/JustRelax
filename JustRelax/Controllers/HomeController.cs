using Microsoft.AspNetCore.Mvc;
using JustRelax.Models;

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
      return RedirectToAction("Game");
    }

    public ActionResult Game()
    {
      return View();
    }
  }
}