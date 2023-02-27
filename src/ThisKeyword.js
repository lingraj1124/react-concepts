import React from 'react'

export default function ThisKeyword(){

    const ThisKeyFunc=()=> {
        const person = {
            firstName: "John",
            lastName: "Doe",
            id: 5566,
            fullName : function() {
              return this.firstName + " " + this.lastName;
            }
          };
          console.log(person.fullName());
    };

    const CallMethod=()=>{
        const person = {
            fullName: function() {
              return this.firstName + " " + this.lastName;
            }
          }
          const person1 = {
            firstName:"John",
            lastName: "Doe"
          }
          
          // console.log(person.fullName.call(person1));

          const person2 = {
            fullName: function(city, country) {
              return this.firstName + " " + this.lastName + "," + city + "," + country;
            }
          }
          
          const person3 = {
            firstName:"John",
            lastName: "Doe"
          }
          
          console.log(person2.fullName.call(person3, "Oslo", "Norway"));
    }

    
    const ApplyMethod=()=>{
        const person = {
            fullName: function(city, country) {
              return this.firstName + " " + this.lastName + "," + city + "," + country;
            }
          }
          
          const person1 = {
            firstName:"John",
            lastName: "Doe"
          }
          
          console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));
    }

    const BindMethod=()=>{
        const person = {
            firstName:"John",
            lastName: "Doe",
            fullName: function () {
              return this.firstName + " " + this.lastName;
            }
          }
          
          const member = {
            firstName:"Hege",
            lastName: "Nilsen",
          }
          
          let fullName = person.fullName.bind(member);

          console.log(fullName());
    }




    return(
        <div className="main-class pagebtn">
        <button type='button' onClick={()=>ThisKeyFunc("Testing")} className='btn'>This Keyword example check console</button>

        <button type='button' onClick={()=>CallMethod()} className='btn'>Call Method example check console</button>

        <button type='button' onClick={()=>ApplyMethod()} className='btn'>Apply Method example check console</button>

        <button type='button' onClick={()=>BindMethod()} className='btn'>Bind Method example check console</button>

    </div>  
    )
}