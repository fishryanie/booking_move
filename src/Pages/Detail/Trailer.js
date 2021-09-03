import React from 'react'
import styled from 'styled-components'

const Iframe = styled.iframe`
  @media(max-width: 992px){height:400px}
  @media(max-width: 768px){height:300px}
`
export default function Trailer(props) {
  return (
    <div>
      {/* Modal */}
      <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-transparent">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className ="text-white" aria-hidden="true">×</span>
              </button>
            </div>
            <div className="p-0 m-0">
              <Iframe width="100%" height="500px" src={props.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
