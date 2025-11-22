using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using miniissuetracker.Repository.Context;
using miniissuetracker.Repository.Models;
using System;
using System.Data.Entity;
using System.Text.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace miniissuetracker.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class IssueController : ControllerBase
    {
        private readonly IssueDbContext _context;

        public IssueController(IssueDbContext context)
        {
            _context = context;
        }
        // GET: api/<IssueController>
        [HttpGet]
        public List<Issues> Get()
        {
            return _context.issues.ToList();
        }

        // GET api/<IssueController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {


            return "value";
        }

        // POST api/<IssueController>
        [HttpPost]
        public async Task<ActionResult> Post(dynamic issue)
        {
            
            Issues _issue = JsonSerializer.Deserialize<Issues>(issue.GetRawText());
                                   
            _issue.CreatedAt= DateTime.Now;
            _issue.IssueResolved = false;
            _context.Add(_issue);
            await _context.SaveChangesAsync();
            return Ok();
        }

        // PUT api/<IssueController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id)
        {
            Issues _issues =_context.issues.Find(id);
            if (_issues==null)
            {
                return StatusCode(statusCode: 404);
            }
            _issues.IssueResolved = true;
            _context.issues.Entry(_issues).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.issues.Any(e => e.IssueID == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        // DELETE api/<IssueController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
