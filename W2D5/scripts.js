let Teacher = null;
{
    "use strict";
    String.prototype.filter = function(str){
        return this.split(" ").filter((s)=> s !== str).join(" ");
    }

    Array.prototype.bubbleSort = function(){
        return bubble_Sort(this);
    }


    function swap(arr, first_Index, second_Index){
        var temp = arr[first_Index];
        arr[first_Index] = arr[second_Index];
        arr[second_Index] = temp;
    }

    function bubble_Sort(arr){

        var len = arr.length,
            i, j, stop;

        for (i=0; i < len; i++){
            for (j=0, stop=len-i; j < stop; j++){
                if (arr[j] > arr[j+1]){
                    swap(arr, j, j+1);
                }
            }
        }

        return arr;
    }

    var Person = function() {};
    Person.prototype.initialize = function(name, age){
        this.name = name;
        this.age = age;
    }


    Person.prototype.describe = function(){
        return this.name + ", " + this.age + " years old.";
    }

    Teacher = function(){};
    Teacher.prototype = new Person();


    Teacher.prototype.teach = function(subject){
        this.subject = subject;
        const out = `${this.name} is now teaching ${this.subject}`;
        console.log(out);
        return out;
    }

    var Student = function() {};
    Student.prototype = new Person();

    Student.prototype.learn = function(subject){
        const out = this.name + " just learned " + subject;
        console.log(out);
        return out;
    }

    var me = new Student();
    me.initialize("John", 25);
    me.learn("Inheritance");
}