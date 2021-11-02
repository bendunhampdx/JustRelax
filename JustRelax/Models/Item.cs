namespace JustRelax.Models
{
  public class Item
  {
    public int ItemId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }

    public int PlayerId { get; set; }
    public virtual Player Player { get; set; }
  }
}