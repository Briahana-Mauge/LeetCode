//Question 1: Two sum
var search = function(nums, target) {
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === target){
            return i
        }
    }
    return -1
};

//Question 26: Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
    let obj = {}
    for(let i = 0; i<nums.length; ){
        if(!obj[nums[i]]){
            obj[nums[i]] = true
        i++
        } else{
            nums.splice(i,1)          
        }
    }
    return nums.length
};

//Question 27: Remove Element (2 solutions)
var removeElement1 = function(nums, val) {
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === val){
            nums.splice(i, 1)
            i--
        }
    }
};

var removeElement2 = function(nums, val) {
    while(nums.indexOf(val) >=0){
        nums.splice(nums.indexOf(val), 1)
    }
return nums.length
};

//Question 33: Search in Rotated Sorted Array
var search = function(nums, target) {
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === target){
            return i
        }
    }
    return -1
};
