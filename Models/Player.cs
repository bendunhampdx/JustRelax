namespace JustRelax
{
  public class Player
  {
    public string Name { get; set; }
    public int Wellness { get; set; }

    public Item[] Inventory { get; set; }
  }

  public Player()
  {
    Wellness = 100;
  }
}