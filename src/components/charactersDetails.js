import * as React from "react"

export default function CharactersDetails() {
    return (
        <div className="w-6/12 bg-blue-200">
            <div className="row g-0">
                <div className="bg-red-500">{" - "}
           img
                </div>
                <div class="">
                    <div class="card-body">
                        <h5 class="card-title text-primary">Name</h5>
                        <p class="card-text">description</p>
                        <p class="card-text">
                            <small class="text-muted">
                                comics.available | stories.available
                            </small>
                        </p>
                        <button class="btn btn-danger btn-lg" type="button">
                            Go back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}