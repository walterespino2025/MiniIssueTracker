namespace miniissuetracker.Repository.Context
{
    using Microsoft.EntityFrameworkCore;
    using miniissuetracker.Repository.Models;

    public class IssueDbContext : DbContext
    {
        public IssueDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
        }

        public DbSet<Issues> issues { get; set; }   
    }
}
