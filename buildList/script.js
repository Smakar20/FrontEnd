
$(document).ready(()=>{
    console.log('my list');
});

var manageList = new function(){
    this.nameList = [];
    this.currIdx;
    this.addToList = ((names)=>{
      if (names.length === 0) return;
      for (var name of names){
        if (this.nameList.includes(name) === false && name.trim() !== ''){
          this.nameList.push(name.trim());
        }
      }
      this.buildList();
    });

    this.addName = (()=>{
      this.addToList([$('#sigName').val().trim()]);
      $('input[name=sigItem]').val('');
    });

    this.addNames = (()=>{
      this.addToList($('#mulName').val().split(','));
      $('input[name=mulItem]').val('');
    });

    this.display = ((id)=>{
      $("#edit-div").css("display", "block");
      this.currIdx = id;
    });

    this.edit = (()=>{
        this.nameList[this.currIdx] = $("#edited").val().trim();
        $("#edit-div").css("display", "none");
        this.buildList();
    });

    this.delete = ((id)=>{
      this.nameList.splice(id,1);
      this.buildList();
    });

    this.buildList = (()=>{
      var structure = '';
      for (var n in this.nameList){
        structure += '<li id="' + n +'">' + this.nameList[n] + ' <button onclick="manageList.display('+ n +')">Edit</button> <button onclick="manageList.delete('+ n +')">Delete</button></li>';
      }
      return $('#myList').html(structure);
    });
};
