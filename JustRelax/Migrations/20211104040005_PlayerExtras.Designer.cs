﻿// <auto-generated />
using JustRelax.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace JustRelax.Migrations
{
    [DbContext(typeof(JustRelaxContext))]
    [Migration("20211104040005_PlayerExtras")]
    partial class PlayerExtras
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("JustRelax.Models.Item", b =>
                {
                    b.Property<int>("ItemId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Name")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("PlayerId")
                        .HasColumnType("int");

                    b.HasKey("ItemId");

                    b.HasIndex("PlayerId");

                    b.ToTable("Items");
                });

            modelBuilder.Entity("JustRelax.Models.NPC", b =>
                {
                    b.Property<int>("NPCId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("Wellness")
                        .HasColumnType("int");

                    b.HasKey("NPCId");

                    b.ToTable("NPCs");
                });

            modelBuilder.Entity("JustRelax.Models.Player", b =>
                {
                    b.Property<int>("PlayerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("BeforeLife")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Hobbies")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Hometown")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Name")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Pronouns")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("Wellness")
                        .HasColumnType("int");

                    b.HasKey("PlayerId");

                    b.ToTable("Players");
                });

            modelBuilder.Entity("JustRelax.Models.Item", b =>
                {
                    b.HasOne("JustRelax.Models.Player", "Player")
                        .WithMany("Inventory")
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Player");
                });

            modelBuilder.Entity("JustRelax.Models.Player", b =>
                {
                    b.Navigation("Inventory");
                });
#pragma warning restore 612, 618
        }
    }
}
