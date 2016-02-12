namespace LearnJS.Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "HeroManagement.Hero",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        SerialNumber = c.Int(nullable: false),
                        Name = c.String(),
                        Power = c.String(),
                        AlterEgo = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("HeroManagement.Hero");
        }
    }
}
