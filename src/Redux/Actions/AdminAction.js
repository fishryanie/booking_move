import axios from 'axios';
export const CreateMemberAction = (member) => {
  axios({
      url:`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
      method:'POST',
      data: member
  }).then(result => {
      alert('Đăng kí thành công')
      console.log(result);
  }).catch(errors => {
      console.log('errors',errors)
  })
}

export const CreateMovieAction = (movie) => {
  axios({
      url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim`,
      method:'POST',
      data: movie
  }).then(result => {
      alert('Đăng kí thành công')
      console.log(result);
  }).catch(errors => {
      console.log('errors',errors)
  })
}
