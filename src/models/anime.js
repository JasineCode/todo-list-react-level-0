export class Anime {
    constructor(
        id=0,
        title="",
        description="",
        cover="",
        nbViews = "6.3k",
        rating = "8.5",
        animeTypes = ["animation/primary", "drama/danger", "action/success"],
        actors = ["Griffin Puatu", "dadaz ", "'dazdaz"],
        startingDate = new Date(),
        link="") {

        this.id = id
        this.title = title
        this.description = description
        this.cover = cover
        this.animeTypes = animeTypes
        this.actors = actors
        this.nbViews = nbViews
        this.rating = rating
        this.startingDate = startingDate.toLocaleDateString()
        this.link=link


    }
}