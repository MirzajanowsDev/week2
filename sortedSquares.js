function arrays(m,n){
    let nums1 = []
    let nums2 = []
    for (let index = 0; index <=m.length; index++) {
        nums1= nums1.push(index)
        
        
    }
    for (let index = 0; index <= n.length; index++) {
        nums1.push(0)
        nums2 =nums2.push(index)
        
    }
 console.log(nums1);
}
arrays(3,3)