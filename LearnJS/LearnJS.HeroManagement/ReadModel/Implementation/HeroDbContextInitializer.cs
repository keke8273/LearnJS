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

        }

    }
}
