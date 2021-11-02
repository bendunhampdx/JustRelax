using Microsoft.EntityFrameworkCore;

namespace JustRelax.Models
{
  public class JustRelaxContext : DbContext
  {
    public DbSet<Player> Players { get; set; }
    public DbSet<Item> Items { get; set; }
    public DbSet<NPC> NPCs { get; set; }

    public JustRelaxContext(DbContextOptions options) : base(options) { }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseLazyLoadingProxies();
    }
  }
}