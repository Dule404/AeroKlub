using Microsoft.EntityFrameworkCore.Migrations;

namespace web.Migrations
{
    public partial class v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "BrojDozvole",
                table: "Clan",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "Avion",
                table: "Aktivnost",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Clan",
                table: "Aktivnost",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Padobran",
                table: "Aktivnost",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Avion",
                table: "Aktivnost");

            migrationBuilder.DropColumn(
                name: "Clan",
                table: "Aktivnost");

            migrationBuilder.DropColumn(
                name: "Padobran",
                table: "Aktivnost");

            migrationBuilder.AlterColumn<int>(
                name: "BrojDozvole",
                table: "Clan",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }
    }
}
