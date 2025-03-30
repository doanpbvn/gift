
function accessURL_Thang() {
    const inputData = document.getElementById("inputData").value; // Lấy giá trị từ input
    const baseURL = "https://script.google.com/macros/s/AKfycbxkBnGrquV3t1oiZ1AwehDE8CnUAPa8nibj0mx3cypgZPC1X93GNo90sw3hovjUL1Ot/exec?"; // URL cơ bản
    let selectedData = "";
    // Lấy giá trị từ radio button được chọn (chỉ có một)
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    if (radioButtons.length > 0) {
        selectedData = radioButtons[0].value; // Giá trị của radio button được chọn
    }
    // Ghép cả giá trị vào URL với "hoanganh" ở giữa
    const fullURL = baseURL + encodeURIComponent(selectedData) +'='+ encodeURIComponent(inputData);
    // Gửi yêu cầu mà không chuyển hướng
    fetch(fullURL)
        .then(response => {
            if (response.ok) {
                return response.text(); // Hoặc response.json() tùy thuộc vào định dạng mà bạn mong đợi
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            alert(`Thành công : ${data}`); // Hiển thị dữ liệu nhận được trong thông báo
        })
        .catch(error => {
            console.error('Có vấn đề với hoạt động fetch:', error);
            alert('Có lỗi xảy ra, vui lòng thử lại!'); // Thông báo khi có lỗi
        });
}

function accessURL_Duong() {
    const inputData = document.getElementById("inputData").value; // Lấy giá trị từ input
    const baseURL = "https://script.google.com/macros/s/AKfycbzFycrBHuP8hZlZPAz6b-MQDjeNhylMHgXGYLnywifYgMe53tI6it1het2-sHoER627/exec?"; // URL cơ bản
    let selectedData = "";
    // Lấy giá trị từ radio button được chọn (chỉ có một)
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    if (radioButtons.length > 0) {
        selectedData = radioButtons[0].value; // Giá trị của radio button được chọn
    }
    // Ghép cả giá trị vào URL với "hoanganh" ở giữa
    const fullURL = baseURL + encodeURIComponent(selectedData) +'='+ encodeURIComponent(inputData);
    // Gửi yêu cầu mà không chuyển hướng
    fetch(fullURL)
        .then(response => {
            if (response.ok) {
                return response.text(); // Hoặc response.json() tùy thuộc vào định dạng mà bạn mong đợi
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            alert(`Thành công : ${data}`); // Hiển thị dữ liệu nhận được trong thông báo
        })
        .catch(error => {
            console.error('Có vấn đề với hoạt động fetch:', error);
            alert('Có lỗi xảy ra, vui lòng thử lại!'); // Thông báo khi có lỗi
        });
}

function accessURL_NhamTheMinh() {
    const inputData = document.getElementById("inputData").value; // Lấy giá trị từ input
    const baseURL = "https://script.google.com/macros/s/AKfycbzFycrBHuP8hZlZPAz6b-MQDjeNhylMHgXGYLnywifYgMe53tI6it1het2-sHoER627/exec?"; // URL cơ bản
    let selectedData = "";
    // Lấy giá trị từ radio button được chọn (chỉ có một)
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    if (radioButtons.length > 0) {
        selectedData = radioButtons[0].value; // Giá trị của radio button được chọn
    }
    // Ghép cả giá trị vào URL với "hoanganh" ở giữa
    const fullURL = baseURL + encodeURIComponent(selectedData) +'='+ encodeURIComponent(inputData);
    // Gửi yêu cầu mà không chuyển hướng
    fetch(fullURL)
        .then(response => {
            if (response.ok) {
                return response.text(); // Hoặc response.json() tùy thuộc vào định dạng mà bạn mong đợi
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            alert(`Thành công : ${data}`); // Hiển thị dữ liệu nhận được trong thông báo
        })
        .catch(error => {
            console.error('Có vấn đề với hoạt động fetch:', error);
            alert('Có lỗi xảy ra, vui lòng thử lại!'); // Thông báo khi có lỗi
        });
}

function accessURL_Son() {
    const inputData = document.getElementById("inputData").value; // Lấy giá trị từ input
    const baseURL = "https://script.google.com/macros/s/AKfycbxuWheczBDsHTpIXxoRCNGwR7cbZ8z4iVs_P7Ee2G_SSsslM8k4FLUi-7BuA5OrJD5E/exec?"; // URL cơ bản
    let selectedData = "";
    // Lấy giá trị từ radio button được chọn (chỉ có một)
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    if (radioButtons.length > 0) {
        selectedData = radioButtons[0].value; // Giá trị của radio button được chọn
    }
    // Ghép cả giá trị vào URL với "hoanganh" ở giữa
    const fullURL = baseURL + encodeURIComponent(selectedData) +'='+ encodeURIComponent(inputData);
    // Gửi yêu cầu mà không chuyển hướng
    fetch(fullURL)
        .then(response => {
            if (response.ok) {
                return response.text(); // Hoặc response.json() tùy thuộc vào định dạng mà bạn mong đợi
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            alert(`Thành công : ${data}`); // Hiển thị dữ liệu nhận được trong thông báo
        })
        .catch(error => {
            console.error('Có vấn đề với hoạt động fetch:', error);
            alert('Có lỗi xảy ra, vui lòng thử lại!'); // Thông báo khi có lỗi
        });
}

function accessURL_Thao() {
    const inputData = document.getElementById("inputData").value; // Lấy giá trị từ input
    const baseURL = "https://script.google.com/macros/s/AKfycbzFycrBHuP8hZlZPAz6b-MQDjeNhylMHgXGYLnywifYgMe53tI6it1het2-sHoER627/exec?"; // URL cơ bản
    let selectedData = "";
    // Lấy giá trị từ radio button được chọn (chỉ có một)
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    if (radioButtons.length > 0) {
        selectedData = radioButtons[0].value; // Giá trị của radio button được chọn
    }
    // Ghép cả giá trị vào URL với "hoanganh" ở giữa
    const fullURL = baseURL + encodeURIComponent(selectedData) +'='+ encodeURIComponent(inputData);
    // Gửi yêu cầu mà không chuyển hướng
    fetch(fullURL)
        .then(response => {
            if (response.ok) {
                return response.text(); // Hoặc response.json() tùy thuộc vào định dạng mà bạn mong đợi
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            alert(`Thành công : ${data}`); // Hiển thị dữ liệu nhận được trong thông báo
        })
        .catch(error => {
            console.error('Có vấn đề với hoạt động fetch:', error);
            alert('Có lỗi xảy ra, vui lòng thử lại!'); // Thông báo khi có lỗi
        });
}

function accessURL_NguyenTruongMinh() {
    const inputData = document.getElementById("inputData").value; // Lấy giá trị từ input
    const baseURL = "https://script.google.com/macros/s/AKfycbzGiwFmZEd23OuYdJXI4uSS7EYu90AjG1Xhe4QjjIiTKZ4mU2n-0vDoLZAKyQrIOYBPGA/exec?"; // URL cơ bản
    let selectedData = "";
    // Lấy giá trị từ radio button được chọn (chỉ có một)
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    if (radioButtons.length > 0) {
        selectedData = radioButtons[0].value; // Giá trị của radio button được chọn
    }
    // Ghép cả giá trị vào URL với "hoanganh" ở giữa
    const fullURL = baseURL + encodeURIComponent(selectedData) +'='+ encodeURIComponent(inputData);
    // Gửi yêu cầu mà không chuyển hướng
    fetch(fullURL)
        .then(response => {
            if (response.ok) {
                return response.text(); // Hoặc response.json() tùy thuộc vào định dạng mà bạn mong đợi
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            alert(`Thành công : ${data}`); // Hiển thị dữ liệu nhận được trong thông báo
        })
        .catch(error => {
            console.error('Có vấn đề với hoạt động fetch:', error);
            alert('Có lỗi xảy ra, vui lòng thử lại!'); // Thông báo khi có lỗi
        });
}