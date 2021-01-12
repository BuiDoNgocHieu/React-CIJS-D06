import React from 'react'
import '../assets/css/EndSection.css'


export function EndSection(props){
    return (
        <div className="EndSection-area">
            <div className="left">
                <div className="content">
                <h1>mindX</h1>
                <h3 className="title">Technology & Startup School</h3>
                </div>    
                <b className="mind">mindX - Technology School</b>
                <p><b>HOTLINE:</b> 024 777 10 666</p>
                <p>🏢 <b>Address:</b></p>
                <b className="mb">North Area:</b>
                <p>
                Basis 1: Tầng 6, toà C, 22 Thành Công, Hà Nội
                <br/>
                Basis 2: Tầng 2, 29T1 Hoàng Đạo Thuý, Hà Nội
                <br/>
                Basis 3: Tầng 6, 107 Nguyễn Phong Sắc, Hà Nội
                <br/>
                Basis 4 (Headquarters): Tầng 5, 71 Nguyễn Chí Thanh, Hà Nội 
                <br/>
                Basis 5: Tầng 4, 505 Minh Khai, Q. Hai Bà Trưng, Hà Nội 
                </p>
            </div>
            <div className="middle">
                <b>Southern Region:</b>
                <p>
                Basis 1: Lầu 2, 253 Điện Biên Phủ, quận 3, Hồ Chí Minh
                <br/>
                Basis 2: Lầu 2, số 19, đường 46, phường Thảo Điền, Quận 2, TP HCM
                <br/>
                Basis 3: Lầu 2, số 195 đường 9A, Khu dân cư Trung Sơn, TP HCM 
                <br/>
                Basis 4: Lầu 2, Cộng Hoà Garden, 20 Cộng Hoà, phường 4, quận Tân Bình, TP HCM
                </p>
            </div>
            <div className="right">
                <div>
                <img src="https://www.transparentpng.com/thumb/facebook-logo-png/image-black-facebook-logo-png-26.png" alt=""/>
                <img className="youtube"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRycyvkjN0xeGA5pHsNsAnrpFx4YbymlUK6yA&usqp=CAU" alt=""/>
                <img className="youtube" src="https://logodix.com/logo/395101.png" alt=""/>
                </div>
                <div className="review">
                    <p><b>Coder:</b> Bùi Đỗ Ngọc Hiếu</p>
                    <p><b>Phone Number:</b> 0357 839 861</p>
                    <p><b>Email:</b> ngochieu839861@gmail.com</p>
                </div>
            </div>
        </div>
    )
}