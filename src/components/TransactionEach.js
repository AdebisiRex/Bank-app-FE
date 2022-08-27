import React from 'react'

const TransactionEach = () => {
  return (
    <>
        <div className='row my-3 px-3 align Items Centeer'>
            <div className="col-8">
            <small>Transaction date</small>
            <p className='mb-1'>Trasation Description</p>
            </div>
            <div className="col-4">
                $Ammount.00
            </div>
        </div>
        <hr />
    </>
  )
}

export default TransactionEach