using System.Collections.Generic;

namespace JustRelax.Models
{
  public class Player
  {
    public int PlayerId { get; set; }
    public string Name { get; set; }
    public int Wellness { get; set; }

    public virtual ICollection<Item> Inventory { get; set; }

    public Player()
    {
      Wellness = 100;
      this.Inventory = new HashSet<Item>();
    }
  }
}