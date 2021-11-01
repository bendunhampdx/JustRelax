using Microsoft.EntityFrameworkCore;

namespace JustRelax.Models
{
  public class JustRelaxContext : DbContext
  {
    public JustRelaxContext(DbContextOptions<JustRelaxContext> options)
        : base(options)
    {
    }

    public DbSet<Item> Items { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<Item>()
      .HasData
      (
        new Item { ItemId = 1, Name = "Laptop", Description = "Black laptop to code in"}
      );
    }
  }
}