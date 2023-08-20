import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState({tom:'True',hp:'True',spidy:'True',sher:'True',scooby:'True',snow:'True',jungle:'True',peter:'True'});
 const [visit, setVisit] = useState({tom:'Add to Cart',hp:'Add to Cart',spidy:'Add to Cart',sher:'Add to Cart',scooby:'Add to Cart',snow:'Add to Cart',jungle:'Add to Cart',peter:'Add to Cart'});
 
  const handleClick = (event,id) => {
    console.log(event.target.getAttribute("id"));
    const index=event.target.getAttribute("id");
    console.log(status[index])
if(status[index]=='True')
{
    setCount((count) => count + 1);
    setStatus({...status,[event.target.id]:'False'});
    setVisit({...visit,[event.target.id]:'Remove from Cart'});
   
}
else if(status[index]=='False')
{
    setCount((count) => count - 1);
    setStatus({...status,[event.target.id]:'True'});
    setVisit({...visit,[event.target.id]:'Add to Cart'});
   
}
console.log(status.tom);
}
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Shopping Cart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                        <i className="fa fa-shopping-cart"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
                        </button>
                    </form>
                </div>
            </div></nav>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder" > Shop All you need</h1>
                     </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://cartoonresearch.com/wp-content/uploads/2017/05/tj1.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Tom and Jerry</h5><b>
                                     $40.00 - $100.00</b>
                                     <br></br>
                                     A fun filled story about a mouse and cat
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center" > <button className='btn btn-primary' id='tom' onClick={(event,id) => handleClick(event,id)} >{visit.tom}</button></div>
                            </div>
                            </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2Fkkhp3.jpg&w=200&c=sc&poi=face&q=60" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Harry Porter and Prisoner of Azkaban</h5><b>
                                     $70.00 - $90.00</b>
                                     <br></br>
                                     Harry find out about his God father and helps him
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center" > <button className='btn btn-primary' id='hp' onClick={(event,id) => handleClick(event,id)} >{visit.hp}</button></div>
                          </div>
                            </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://d29xot63vimef3.cloudfront.net/image/spider-man-books/2-2.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Fancy Product</h5><b>
                                     $80.00 - $120.00</b>
                                     <br></br>
                                     spiderman,friendly neighbourhood helps all in need
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center" > <button className='btn btn-primary' id='spidy' onClick={(event,id) => handleClick(event,id)} >{visit.spidy}</button></div>
                             </div>
                            </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641334050i/60032527.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Scooby Doo</h5><b>
                                     $60.00 - $110.00</b>
                                     <br></br>
                                     Our team discovers the actual truth and helps all
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center" > <button className='btn btn-primary'id='scooby' onClick={(event,id) => handleClick(event,id)} >{visit.scooby}</button></div>
                           </div>
                            </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/3428611a.webp" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Sherlock Holmes</h5><b>
                                     $40.00 - $80.00</b>
                                     <br></br>
                                     Another story of our intelligent detective and genius
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center" > <button className='btn btn-primary' id='sher' onClick={(event,id) => handleClick(event,id)} >{visit.sher}</button></div>
                          </div>
                            </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://theultimatelyuselessstoriesofanaverageteenager.files.wordpress.com/2015/05/peter-pan-cover.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Peter Pan</h5><b>
                                     $50.00 - $90.00</b>
                                     <br></br>
                                     Peter and wendy goes to neverland so that they cant become adult
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center" > <button className='btn btn-primary' id='peter' onClick={(event,id) => handleClick(event,id)} >{visit.peter}</button></div>
                           </div>
                            </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://cdn.kobo.com/book-images/2a9c2f82-ce82-42d6-8ed2-298e82e1f6d2/353/569/90/False/the-jungle-book-220.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Jungle Book</h5>
                                     <b>$40.00 - $60.00</b>
                                     <br></br>
                                     A story of a boy who lives with animals and helps them
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center" > <button className='btn btn-primary'id='jungle' onClick={(event,id) => handleClick(event,id)} >{visit.jungle}</button></div>
                          </div>
                            </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://cdn.kobo.com/book-images/2db526c9-87ef-41e5-82fb-53bbddccb3e1/353/569/90/False/snow-white-and-the-seven-dwarfs-read-along-storybook.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Snow White and the Seven Dwarfs</h5>
                                    <b> $30.00 - $50.00</b>
                                     <br></br>
                                     snow white finds her prince and lives happily ever after
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center" > <button className='btn btn-primary' id='snow' onClick={(event,id) => handleClick(event,id)} >{visit.snow}</button></div>
                           </div>
                         </div>
                    
                    </div>
                </div>
            </div>
        </section>
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Shopping Cart 2023</p></div>
        </footer>
     </>
  )
}

export default App
