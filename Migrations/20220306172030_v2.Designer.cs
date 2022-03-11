﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Models;

namespace web.Migrations
{
    [DbContext(typeof(AeroKlubContext))]
    [Migration("20220306172030_v2")]
    partial class v2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Models.Aktivnost", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Avion")
                        .HasColumnType("int");

                    b.Property<int?>("AvionID")
                        .HasColumnType("int");

                    b.Property<int>("Clan")
                        .HasColumnType("int");

                    b.Property<int?>("ClanID")
                        .HasColumnType("int");

                    b.Property<string>("Datum")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Padobran")
                        .HasColumnType("int");

                    b.Property<int?>("PadobranID")
                        .HasColumnType("int");

                    b.Property<int>("Visina")
                        .HasColumnType("int");

                    b.Property<string>("Vreme")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("AvionID");

                    b.HasIndex("ClanID");

                    b.HasIndex("PadobranID");

                    b.ToTable("Aktivnost");
                });

            modelBuilder.Entity("Models.Avion", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Naziv")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Registracija")
                        .IsRequired()
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.HasKey("ID");

                    b.ToTable("Avion");
                });

            modelBuilder.Entity("Models.Clan", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("BrojDozvole")
                        .HasColumnType("int");

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Prezime")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("TipDozvole")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("ID");

                    b.ToTable("Clan");
                });

            modelBuilder.Entity("Models.Padobran", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Naziv")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("Povrsina")
                        .HasColumnType("int");

                    b.Property<string>("Tip")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("ID");

                    b.ToTable("Padobran");
                });

            modelBuilder.Entity("Models.Aktivnost", b =>
                {
                    b.HasOne("Models.Avion", null)
                        .WithMany("Aktivnosti")
                        .HasForeignKey("AvionID");

                    b.HasOne("Models.Clan", null)
                        .WithMany("Aktivnosti")
                        .HasForeignKey("ClanID");

                    b.HasOne("Models.Padobran", null)
                        .WithMany("Aktivnosti")
                        .HasForeignKey("PadobranID");
                });

            modelBuilder.Entity("Models.Avion", b =>
                {
                    b.Navigation("Aktivnosti");
                });

            modelBuilder.Entity("Models.Clan", b =>
                {
                    b.Navigation("Aktivnosti");
                });

            modelBuilder.Entity("Models.Padobran", b =>
                {
                    b.Navigation("Aktivnosti");
                });
#pragma warning restore 612, 618
        }
    }
}
