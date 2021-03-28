import React from 'react'

export const Card = ({id, imgSrc, imgAlt, title}) => {
    return (
        <div className="col-12 col-md-4">
            <div key={id} className="card">
              <img src={imgSrc} className="" alt="..." />
              {/* <div className="card-body">
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div> */}
            </div>
        </div>
    )
}
