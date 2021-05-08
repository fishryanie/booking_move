import React from 'react'
import "./Carousel.css"
export default function Carousel() {
    return (
        <section className="slider">
            <div id="bannerCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#bannerCarousel" data-slide-to={0} className="active" />
                    <li data-target="#bannerCarousel" data-slide-to={1} />
                    <li data-target="#bannerCarousel" data-slide-to={2} />
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active carousel-item-1">
                        <div className="carousel-caption text-left container">
                            <span className="text-warning">ACTION, ADVENTURE, FANTASY</span>
                            <h1 className="text-white display-4 mb-2">
                                End of the World: Part II
                            </h1>
                            <p className="text-white">
                                Claritas est etiam processus dynamicus, qui sequitur mutationem
                                consuetudium lectorum. Mirum est notare quam littera gothica,
                                quam nunc putamus parum.
                            </p>
                            <div className="play d-flex align-items-center">
                                <span className="border rounded-circle mr-2">PG</span>
                                <button className="text-white">
                                    <i className="fa fa-play" />
              Play trailer
            </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-2">
                        <div className="carousel-caption text-left container">
                            <span className="text-warning">ACTION, ADVENTURE, FANTASY</span>
                            <h1 className="text-white display-4 mb-2">
                                End of the World: Part II
          </h1>
                            <p className="text-white">
                                Claritas est etiam processus dynamicus, qui sequitur mutationem
                                consuetudium lectorum. Mirum est notare quam littera gothica,
                                quam nunc putamus parum.
          </p>
                            <div className="play d-flex align-items-center">
                                <span className="border rounded-circle mr-2">PG</span>
                                <button className="text-white">
                                    <i className="fa fa-play" />
              Play trailer
            </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-3">
                        <div className="carousel-caption text-left container ">
                            <span className="text-warning">ACTION, ADVENTURE, FANTASY</span>
                            <h1 className="text-white display-4 mb-2">
                                End of the World: Part II
          </h1>
                            <p className="text-white">
                                Claritas est etiam processus dynamicus, qui sequitur mutationem
                                consuetudium lectorum. Mirum est notare quam littera gothica,
                                quam nunc putamus parum.
          </p>
                            <div className="play d-flex align-items-center">
                                <span className="border rounded-circle mr-2">PG</span>
                                <button className="text-white">
                                    <i className="fa fa-play" />
              Play trailer
            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
