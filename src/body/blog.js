import './blog.css';
function BlogImag()
{
    return(
        <div className="blogs">
            <div className='blogPost'>
                <div className='imagblog' id='imgblog1'></div>
                <div className='matterBlog'>
                    <p>23/06/2021 | <span>eCommerce</span></p>
                    <h3 className='para'>Lorem Ipsum Dolor Sit Amet ,Elit</h3>
                    <h3 className='para'>ImpEdit,Aliquam Animi ,Saepe Ex</h3>
                    <pre> </pre>
                    <p>SHOW MORE  <button> ▸ </button> </p>
                </div>
            </div>
            <div className='blogPost'>
                 <div className='imagblog' id='imgblog2'></div>
                <div className='matterBlog'>
                     <p>23/06/2021 | <span>eCommerce</span></p>
                    <h3 className='para'>Dolor Sit Amet ,Elit illo iste Sed Animi</h3>
                    <h3 className='para'>Quaerat Nobis Odit Nulla</h3>
                    <pre> </pre>
                    <p>SHOW MORE  <button> ▸ </button> </p>

                </div>
            </div>
            <div className='blogPost'>
                 <div className='imagblog' id='imgblog3'></div>
                <div className='matterBlog'>
                     <p>23/06/2021 | <span>eCommerce</span></p>
                    <h3 className='para'>Maxime Laborum Voluptas Minus ,Est,</h3>
                    <h3 className='para'>Unde Eaque Esse Tenetur</h3>
                    <pre> </pre>
                    <p>SHOW MORE  <button> ▸ </button> </p>

                </div>
            </div>
        </div>
    )
}
export default BlogImag;