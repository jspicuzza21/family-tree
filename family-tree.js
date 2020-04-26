class FamilyTree {
  constructor (name) {
    if (name===undefined || typeof(name)!=='string'){
      throw 'Error, no name entered';
    }
    else {
      this.value=name;
    }
    this.children=[];
  }

  insert(val){
    this.children.push(new FamilyTree (val));
  }

  familySize(){
    if (this.children===[]){
      return 1;
    } else{
      return this.children.length+1;
    }
  }

  findMember(name){
    let foundObj=undefined;
    for (let i=0; i<this.children.length;i++){
      let currentChildObj=this.children[i];
      if (currentChildObj.value===name){
        return currentChildObj;
      } else if (currentChildObj.children!==[]){
        foundObj=currentChildObj.findMember(name);
      }
      if (foundObj!==undefined) break;
    } 
    return foundObj;
  }

  log(){
    let log ='';
    log+= `-- ${this.value}`;
    function addToLog(generation=4){
      for (let i=0; i<this.children.length;i++){
        let currentChildObj=this.children[i];
        log+='\n' ;
        for (let i=0; i<generation; i++){
          log+='-';
        }
        log+=` ${currentChildObj.value}`;
        if (currentChildObj.children!==[]){
          addToLog.call(currentChildObj,generation+2);
        }
      }
    }
    addToLog.call(this);
    return log;
  }
}

module.exports = FamilyTree;
