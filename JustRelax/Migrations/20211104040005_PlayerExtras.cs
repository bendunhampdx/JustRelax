using Microsoft.EntityFrameworkCore.Migrations;

namespace JustRelax.Migrations
{
    public partial class PlayerExtras : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BeforeLife",
                table: "Players",
                type: "longtext CHARACTER SET utf8mb4",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Hobbies",
                table: "Players",
                type: "longtext CHARACTER SET utf8mb4",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Hometown",
                table: "Players",
                type: "longtext CHARACTER SET utf8mb4",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Pronouns",
                table: "Players",
                type: "longtext CHARACTER SET utf8mb4",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BeforeLife",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "Hobbies",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "Hometown",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "Pronouns",
                table: "Players");
        }
    }
}
