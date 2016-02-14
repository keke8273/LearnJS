using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using AutoMapper;
using LearnJS.Dto;
using LearnJS.HeroManagement;
using LearnJS.HeroManagement.ReadModel;
using Microsoft.Practices.ObjectBuilder2;

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
        [EnableCors(origins: "http://localhost:13663, http://learnangular2.azurewebsites.net", headers: "*", methods: "*")]
        public IHttpActionResult GetHeroes()
        {
            var ret = Mapper.Map<IEnumerable<HeroDto>>(_heroDao.GetHeroes());
            return Ok(ret);
        }

        [HttpPost]
        [Route("")]
        [EnableCors(origins: "http://localhost:13663, http://learnangular2.azurewebsites.net", headers: "*", methods: "*")]
        public IHttpActionResult CreateHero(HeroDto heroDto)
        {
            //todo:: very bad. not thread safe but for demo purpose it is ok.
            heroDto.SerialNumber = _heroDao.GetHeroes().Max(hero => hero.SerialNumber) + 1;

            var heroInfo = Mapper.Map<HeroInfo>(heroDto);

            heroInfo.Id = Guid.NewGuid();
            
            Service.CreateHero(heroInfo);

            return Created(Request.RequestUri + heroInfo.Id.ToString(), heroDto);
        }
    }
}