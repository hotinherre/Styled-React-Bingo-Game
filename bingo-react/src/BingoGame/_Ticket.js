function _Ticket(x, y, total){
    function _nums(n, total){
        //init nums = [1,2,3, ... m]
        const nums = new Array(total).fill(0).map((v, i) => i + 1);
        //shuffle nums
        for (let i = nums.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * i);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        return nums.slice(0, n);
    }
    this.sizeX = x;
    this.sizeY = y;
    this.nums = _nums(x * y, total);
    this.isBingo = false;
}

export default _Ticket;