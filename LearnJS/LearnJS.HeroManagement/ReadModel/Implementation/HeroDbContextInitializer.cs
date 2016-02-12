using System;
using System.Collections.Generic;
using System.Data.Entity;

namespace LearnJS.HeroManagement.ReadModel.Implementation
{
    public class HeroDbContextInitializer : CreateDatabaseIfNotExists<HeroDbContext>
    {
        public override void InitializeDatabase(HeroDbContext context)
        {
            Seed(context);

            context.SaveChanges();
        }

        public static void Seed(DbContext context)
        {
            context.Set<Hero>().AddRange(new List<Hero>
            {
                new Hero
                {
                    Id = Guid.NewGuid(),
                    Name = "Dr Awrsome",
                    Power = "Super Cool",
                    SerialNumber = 1,
                    AlterEgo = "Be cool",
                },
                new Hero
                {
                    Id = Guid.NewGuid(),
                    Name = "Nissa",
                    Power = "Awaken Lands",
                    SerialNumber = 2,
                    AlterEgo = "Defeat Eldrazi"
                }
            });

            context.SaveChanges();
        }

    }
}
