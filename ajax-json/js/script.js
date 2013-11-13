//var a=['a','b'];
//a.forEach(function(item){
//	
//});
$(function(){  
    //创建简单的User类  
    var User = Backbone.Model.extend({  
    });  
    //User的集合  
    var UserList = Backbone.Collection.extend({  
        model:User  
    });  
    //增加一些测试数据  
    var Users = new UserList;  
    //Users.add([{'name':'zhangsan'},{'name':'lisi'}]);  
    //ListView中的每个Item的视图  
    var ItemView = Backbone.View.extend({  
        tagName:'li',  
        //_.template是Underscore中的方法  
        //template:_.template($('#itemTmpl').html()),  
		template:_.template('<img src="<%= imgUrl %>" /><span><%= title %></span>'),
        // **render** is the core function that your view should override, in order  
        // to populate its element (`this.el`), with the appropriate HTML. The  
        // convention is for **render** to always return `this`.  
        render: function() {  
            //下面是this.el获得的源码  
            /** 
            if (!this.el) { 
                var attrs = this.attributes || {}; 
                if (this.id) attrs.id = this.id; 
                if (this.className) attrs['class'] = this.className; 
                this.el = this.make(this.tagName, attrs); 
            }else if (_.isString(this.el)) { 
              this.el = $(this.el).get(0); 
            } 
            **/  
            //可以看出this.el是通过make方法动态创建的  
            //this.model接收在new的时候传入的user  
            $(this.el).html(this.template(this.model.toJSON()));  
            return this;//always return this  
        },  
        events:{  
           // "click":"viewDetail"//绑定单击事件  
        },  
        viewDetail:function(){  
            console.log(this.model.toJSON());  
            alert('你选择了'+this.model.get('name'));  
        }  
    });  
    //主视图  
    var AppView = Backbone.View.extend({  
        initialize:function(){  
            //绑定一些事件  
        },  
        addAll:function(){  
            //实际开发中是先从服务器load数据，然后再执行下面，因此从服务器load数据应该是  
            //在该视图初始化的时候就执行，可以在初始化的时候调用fetch（）方法
			$.ajax({
				"url":"data.txt",
				"type":"get",
				"dataType":"json",
				"success":function(data){
					if(data.success){
						Users.add(data.rows); 
						Users.each(function(user){  
							//console.log(user);  
							//将user传入ItemView中  
							var view = new ItemView({model: user});  
							$('#listView').append(view.render().el);  
						}); 
					}
				}	
			});  

        }  
    });  
    //入口  
    new AppView().addAll();  
});  