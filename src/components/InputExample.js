import React, { useState } from "react";

export default function InputExample() {
  const [form, setForm] = useState({name:'',surname:''});
 
  const onChangeInput=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
 
  return (
    <div>
      Lütfen İsminizi Giriniz <br/><br/>
      <input name="name" value={form.name} onChange={onChangeInput}></input><br/>
      {form.name}<br/><br/><br/>
      Lütfen Soyisminizi Giriniz <br/><br/>
      <input name="surname" value={form.surname} onChange={onChangeInput}></input><br/>
      {form.surname}<br/><br/><br/>
    </div>
  );
}
