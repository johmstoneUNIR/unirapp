import React from 'react'
import productos from './../data/productos.json';
import { Breadcrumb } from './../components/common/Breadcrumb';
import { Search } from './../components/common/Search';

export const PedidosPage = () => {
  return (
    <>
      <div className="container-fluid">
          <h2 className='mt-2'>Pedidos</h2>
          <Breadcrumb titulo="Pedidos"></Breadcrumb>
          <div className="row">
            <div className="col">
              <div className="shadow-sm p-3 bg-white rounded">
                <div className="row">
                <Search></Search>
                  <div className="card-group">
                    { 
                      productos.map( producto => {
                        return (<div className="col-md-3 col-sm-6 col-xs-1" key={producto.id}>
                                   
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
