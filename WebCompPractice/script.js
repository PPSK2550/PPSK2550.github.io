function placeElement(element, inHTML) {
	let myElement = document.querySelector(element)
	if (myElement) {
		myElement.innerHTML = inHTML
	}
}

placeElement('.topWelcome', `
	<marquee>ยินดีต้อนรับเข้าสู่เว็บไซต์ข้อมูลสำหรับ IoT</marquee>
`)
placeElement('.topNav', `
	<div class="logoNav">
		<h1>IoT</h1>
	</div>
	<ul>
		<li><a href="./index.html">หน้าหลัก</a></li>
		<li><a href="./content1.html">เนื้อหา</a></li>
		<li><a href="./download.html">ดาวน์โหลด</a></li>
		<li><a href="./member.html">ระบบสมาชิก</a></li>
		<li><a href="./aboutUs.html">เกี่ยวกับเรา</a></li>
	</ul>
`)
placeElement('.topPic', `
	<div class="topPicImg">
		<div class="topTopic">
			<h1>IoT</h1>
			<h2>Internet of Things</h2>
		</div>
	</div>
`)
placeElement('.mainFooter', `
	<h1>©️ 2022 โดย กุญแจคริสเตียนวิทยา</h1>
	<h2>จัดทำโดย</h2>
	<h3>ด.ช.xxxxxx xxxxxx</h3>
	<h3>ด.ช.xxxxxx xxxxxx</h3>
`)
placeElement('.sideBar', `
	<div class="menuContainer">
		<h1>IoT</h1>
		<ul id="mainMenu">
			<li><a href="./content1.html">IoT คืออะไร</a></li>
			<li><a href="./content2.html">IoT ทำงานอย่างไร</a></li>
			<li><a href="./content3.html">ตัวอย่างของอุปกรณ์ IoT</a></li>
			<li><a href="./content4.html">IoT ปรับปรุงชีวิต</a></li>
			<li><a href="./content5.html">IoT สำหรับอุตสาหกรรม</a></li>
			<li><a href="./content6.html">IoT ต่อธุรกิจ</a></li>
		</ul>
	</div>
	<div class="menuContainer">
		<h1>เข้าสู่ระบบ</h1>
		<form>
			<div class="inputContainer">
				<label for="usernameInput">ชื่อผู้ใช้</label>
				<input id="usernameInput"type="text">
			</div>
			<div class="inputContainer">
				<label for="passwordInput">รหัสผ่าน</label>
				<input id="passwordInput"type="password">
			</div>
			<div class="loginButtonContainer">
				<input type="submit" value="เข้าสู่ระบบ">
				<input type="button" value="สมัครสมาชิก">
			</div>
		</form>
	</div>
	<div class="menuContainer">
		<h1>เว็บไซต์แนะนำ</h1>
		<ul>
			<li><a target="_blank" href="./content1.html">website</a></li>
			<li><a target="_blank" href="./content1.html">website</a></li>
			<li><a target="_blank" href="./content1.html">website</a></li>
			<li><a target="_blank" href="./content1.html">website</a></li>
			<li><a target="_blank" href="./content1.html">website</a></li>
			<li><a target="_blank" href="./content1.html">website</a></li>
		</ul>
	</div>
`)
let mainMenu = document.querySelector('#mainMenu');
if (mainMenu) {
	for (i=0; i<mainMenu.children.length; i++) {
		let a = mainMenu.children[i].children[0]
		if (a.href == location.href) { 
			a.id = "activeLi";
			break;
		}
	}
}

let viewablePics = document.querySelectorAll('.clickView')
let pictureShow = document.querySelector('.pictureShow')
let closeBtn = document.querySelector('.closeBtn')
let showPic = document.querySelector('.showPic')
if (viewablePics && pictureShow && closeBtn && showPic) {
	closeBtn.addEventListener('click', function() {
		pictureShow.style.display = 'none'
	})

	for (let i=0; i<viewablePics.length; i++) {
		viewablePics[i].addEventListener('click', function() {
			pictureShow.style.display = 'block';
			showPic.src = viewablePics[i].src
		})
	}
}