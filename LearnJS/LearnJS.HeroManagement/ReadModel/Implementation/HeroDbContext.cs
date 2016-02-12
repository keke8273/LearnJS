using System;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;

namespace LearnJS.HeroManagement.ReadModel.Implementation
{
    public class HeroDbContext : DbContext
    {
        public const string SchemaName = "HeroManagement";

        public HeroDbContext() : base(nameOrConnectionString:SchemaName)
        {
        }

        public HeroDbContext(string nameOrConnectionString)
            : base (nameOrConnectionString)
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Hero>().ToTable("Hero", SchemaName);

            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

        public DbSet<Hero> Heroes { get; set; }

        public T Find<T>(Guid id) where T : class
        {
            return Set<T>().Find(id);
        }

        public IQueryable<T> Query<T>() where T : class
        {
            return this.Set<T>();
        }

        public void Save<T>(T entity) where T : class
        {
            var entry = this.Entry(entity);

            if (entry.State == EntityState.Detached)
                this.Set<T>().Add(entity);

            SaveChanges();
        }
    }
}
