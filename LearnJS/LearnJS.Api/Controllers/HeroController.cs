using System;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using LearnJS.Dto;
using LearnJS.HeroManagement;
using LearnJS.HeroManagement.ReadModel;

namespace LearnJS.Api.Controllers
{
    [RoutePrefix("api/hero")]
    public class HeroController : ApiController
    {
        private readonly IHeroDao _heroDao;
        private HeroService _heroService;

        private HeroService Service
        {
            get { return _heroService ?? (_heroService = new HeroService()); }
        }

        public HeroController(IHeroDao heroDao)
        {
            _heroDao = heroDao;
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult GetHeroes()
        {
            return Ok(_heroDao.GetHeroes());
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult CreateHero(HeroDto heroDto)
        {
            var heroInfo = Mapper.Map<HeroInfo>(heroDto);
            heroInfo.Id = Guid.NewGuid();
            Service.CreateHero(heroInfo);

            return Created(Request.RequestUri + heroInfo.Id.ToString(), heroDto);
        }
    }
}