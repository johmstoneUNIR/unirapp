import React from 'react'
import productos from './../data/productos.json';
import { CardProducto } from './../components/CardProducto';
import { Breadcrumb } from './../components/common/Breadcrumb';

export const ProductosPage = () => {
  return (
    <>
      <div className="container-fluid">
          <h2 className='mt-2'>Inicio : Productos</h2>
          <Breadcrumb></Breadcrumb>
          <div className="row">
            <div className="col">
              <div className="shadow-sm p-3 bg-white rounded">
                <div className="row">
                  <div className="card-group">
                    { 
                      productos.map( producto => {
                        return (<div className="col-md-3 col-sm-6 col-xs-1">
                                    <CardProducto producto={producto}></CardProducto>
                                </div>)
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
