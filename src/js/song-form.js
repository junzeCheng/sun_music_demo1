{
  let view={
    el: ".page > main",
    template:`
    <h1>新建歌曲</h1>
    <form class="form">
      <div class="row">
        <lable>
          歌名
          <input type="text">
        </lable>
      </div>
      <div class="row">
        <lable>
          歌手
          <input type="text">
        </lable>
      </div>
      <div class="row">
        <lable>
          外链
          <input type="text">
        </lable>
      </div>
      <div class="row">
        <lable>
          <input type="submit" value="保存">
        </lable>
      </div>
    </form>
    `,
    render(data){
      $(this.el).html(this.template);
    }
  }
  let model = {}
  let controller = {
    init(view,model){
      this.view=view
      this.model=model
      this.view.render(this.model.data)
    }
  }
  controller.init(view,model);
}