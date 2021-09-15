import * as React from "react"

export default function CharactersDetails() {
    return (
        <div className="w-full my-2 bg-blue-200">
            <div className="row g-0">
                <div className="bg-red-500">
                <img 
                className="object-contain h-full w-full" 
                alt="Hero Details"
                src="https://i2.wp.com/hipertextual.com/wp-content/uploads/2016/07/wonder-woman-trailer-pelicula.jpg">
                    </img>
                </div>
                <div className="">
                    <div className="card-body">
                        <h4 className="card-title text-primary px-1">Name</h4>
                        <p className="card-text px-1">description</p>
                        <p className="card-text px-1">
                            <small className="text-muted">
                                comics.available | stories.available
                            </small>
                        </p>
                        <button className="btn btn-danger btn-lg" type="button">
                            Go back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}