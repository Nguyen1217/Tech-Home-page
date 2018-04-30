var inputSearching = new Vue({
	el:'#js-home-section-1',
	data:{
		hide: false,
		hidden:false,
		searching:"",
		articles:[
			{title: 'Node js tutorial', url:'TEDTalks'},
			{title: 'Nde js là gì', url:'TEDTalks'},
			{title: 'Node js căn bản', url:'TEDTalks'},
			{title: 'Node js w3schooll', url:'TEDTalks'},
			{title: 'update Node js', url:'TEDTalks'},
			{title: 'js navbar button', url:'TEDTalks'},
			{title: 'js object w3school', url:'TEDTalks'},
			{title: 'js online', url:'TEDTalks'},
			{title: 'j freetust', url:'TEDTalks'},
			{title: 'js foreach', url:'TEDTalks'}
		],
	},
	computed:{
		filteredArticles: function(){
			var article_arr = this.articles;
			searching = this.searching.trim().toLowerCase();
			if(!searching){
				this.hide = false;
				this.hidden = false;
			}
			else{
				this.hide = true;
				this.hidden = true;
			}
			var article_arr = article_arr.filter(function(item){
				if(item.title.toLowerCase().slice(0,searching.length) === searching){
					return item;
				}
			});
			return article_arr;
		}
	},
	
})






//icon-action component
Vue.component('icon-action',{
	template:`
	<div>
		<div class="col-md-4" v-for = "subcontent in content">
			<div class="icon-container">
				<img :src = "'assets/img/' + subcontent.icon + '.png'">
				<div class="content-wrapper">
					<h3>{{subcontent.name}}</h3>
					<p>{{subcontent.title}}</p>
				
				</div>
			</div>
		</div>
		
	</div>
	`,
	data: function(){
		return{
			content:[
				{name:"Ask", title:"Create your account within minutes", icon:"ask"},
				{name:"Solve problem", title:"Create your account within minutes", icon:"ask"},
				{name:"Connect", title:"Create your account within minutes", icon:"ask"}
			]
		}
	}
})
var iconAction = new Vue({
el:'#js-home-section-2',
})





//Top questions component
	//parent component(tabs)
	Vue.component('tab_top',{
		props:['alldata1'],
		template: `
		<div class="subtab">
		<ul class="item-list">
			<li v-for="subobj in alldata1" style = "width:100%;">
				<post :item="subobj" status = "Follow"></post>
			</li>
		</ul>
	</div>`,
		data: function () {
			return{}
			}
	});

	Vue.component('tab_english',{
		props:['alldata2'],
		template: `
		<div class="subtab">
			<ul class="item-list">
				<li v-for="subobj in alldata2" style = "width:100%;">
					<post :item="subobj" status = "Follow"></post>
				</li>
			</ul>
		</div>`,
		data: function () {
			return{}
			},
	});

	Vue.component('tab_technology',{
		props:['alldata3'],
		template: `               
		<div class="subtab">
			<ul class="item-list">
				<li v-for="subobj in alldata3" style = "width:100%;">
					<post :item="subobj"></post>
				</li>
			</ul>
		</div>`,
		data: function () {
			return{}
			},
		
		
	});
	// child component(post)
	Vue.component('post', {
		template: "#post",
		props: ['item'],
		data: function () {
			return{
				follow:false,
				status:"Follow"
			}
		},
		methods:{
			count:function(){
				this.follow = !this.follow;
				this.follow ? this.status = "Following" : this.status = "Follow";
				this.follow ? this.item.num_follow++ : this.item.num_follow--;
			}
		}
	});

// Popup component
	Vue.component('modal',{
		props:['userinfo'],
		template:`
		<div>
		<div class= "modal-overlay" v-on:click = "$emit('close')"></div>
		<div class="container popup">
		<div class = "col-md-6 col-md-offset-3" style = "background:#fff;" >
			<div class = "row">
				<div class="col-md-12 col-sm-12 col-xs-12">
					<span class="glyphicon glyphicon-remove icon-close pull-right" v-on:click = "$emit('close')"></span>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 col-sm-11 col-xs-12">
						<img :src = "'assets/img/avatar_users/' + userinfo.avar_user + '.png'" class="thumb-user">
						<input class = "set-question" placeholder="What do you want to ask?">
				</div>
			</div>
			<hr style="clear: both;">
			<div class="row">
				<div class="col-md-12">
					<textarea placeholder="Your content..."></textarea>
				</div>
				
			</div>
			<div class="row">
			<div class="col-md-6 col-sm-6 col-xs-6 pull-left">
				<select class="select">
					<option>Topics</option>
					<option>English</option>
					<option>Technology</option>
					<option>Startup</option>
				</select>
				</div>
				<div class="col-md-6 col-sm-6 col-xs-6">
					<button class="button pull-right">Add question</button>
				</div>
			</div>
			</div>
		 </div>
	</div>
		`
	});


var topQuestions = new Vue({
	el: '#js-home-section-3',
	data:{
		showModal: false,
		user:{
			avar_user:"avatar17",
			url_profile:"Malala"
		},
		posts:{
			
			tab_top: [
				{title: "How are you?", url: "185928", avar_ask:"avatar11", url_profile:"Malala", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Về $$state trong angularjs", url: "185928", avar_ask:"avatar12", url_profile:"Malala", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", name:"Nguyen Nguyen",time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Về $$state trong angularjs", url: "185928", avar_ask:"avatar13", num_answer: 5, url_profile:"UN_Women", num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Về $$state trong angularjs", url: "185928", avar_ask:"avatar14", url_profile:"UNHumanRights", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Về $$state trong angularjs", url: "185928", avar_ask:"avatar15", url_profile:"hrw", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "}
			],
			tab_english: [
				{title: "Làm sao để học React tốt?", url: "185928", avar_ask:"avatar6", url_profile:"EmmaWatson", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", name:"Nguyen Nguyen",time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Làm sao để học React tốt?", url: "185928", avar_ask:"avatar7", url_profile:"HarryPotterFilm", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", name:"Nguyen Nguyen",time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Làm sao để học React tốt?", url: "185928", avar_ask:"avatar8", num_answer: 5, url_profile:"pottermore", num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16",name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Làm sao để học React tốt?", url: "185928", avar_ask:"avatar9", url_profile:"UNICEF", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16",name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Làm sao để học React tốt?", url: "185928", avar_ask:"avatar10", url_profile:"Malala", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16",name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "}
			],
			tab_technology: [
				{title: "How is the name “Gandalf” pronounced?", url: "185928", avar_ask:"avatar1", url_profile:"Malala", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar1",name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "How is the name “Gandalf” pronounced?", url: "185928", avar_ask:"avatar2", url_profile:"UN_Women", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16",name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "How is the name “Gandalf” pronounced?", url: "185928", avar_ask:"avatar3", num_answer: 5, url_profile:"hrw", num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16",name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "How is the name “Gandalf” pronounced?", url: "185928", avar_ask:"avatar4", url_profile:"jk_rowling", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16",name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "How is the name “Gandalf” pronounced?", url: "185928", avar_ask:"avatar5", url_profile:"EmmaWatson", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16",name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "}
			]
		},
		currentTab: 'Top',
			tabs: ['Top','English','Technology']
	},
	computed: {
		currentTabComponent: function () {
		  return 'tab_' + this.currentTab.toLowerCase();
		},
	},
	
});



		
var topUsers = new Vue({
	el:'#js-topusers',
	data:{
		column1:[
			{name: "avatar1", url_profile:"Malala"},
			{name: "avatar2", url_profile:"Malala"}
		],
		column2:[
			{name: "avatar4", url_profile:"Malala"},
			{name: "avatar5", url_profile:"Malala"}
		],
		column3:[
			{name: "avatar6", url_profile:"Malala"},
			{name: "avatar7", url_profile:"Malala"}
		],
		column4:[
			{name: "avatar8", url_profile:"Malala"},
			{name: "avatar9", url_profile:"Malala"}
		],
		column5:[
			{name: "avatar10", url_profile:"Malala"},
			{name: "avatar11", url_profile:"Malala"}
		],
		column6:[
			{name: "avatar12", url_profile:"Malala"},
			{name: "avatar13", url_profile:"Malala"}
		],
		column7:[
			{name: "avatar14", url_profile:"Malala"},
			{name: "avatar15", url_profile:"Malala"}
		],
		column8:[
			{name: "avatar16", url_profile:"Malala"},
			{name: "avatar17", url_profile:"Malala"}
		],
		column9:[
			{name: "avatar18", url_profile:"Malala"},
			{name: "avatar19", url_profile:"Malala"},
			{name: "avatar20", url_profile:"Malala"}
		],
		column10:[
			{name: "avatar21", url_profile:"Malala"},
			{name: "avatar22", url_profile:"Malala"},
			{name: "avatar23", url_profile:"Malala"}
		],
		column11:[
			{name: "avatar24", url_profile:"Malala"},
			{name: "avatar25", url_profile:"Malala"},
			{name: "avatar26", url_profile:"Malala"}
		],
		column12:[
			{name: "avatar27", url_profile:"Malala"},
			{name: "avatar28", url_profile:"Malala"},
			{name: "avatar29", url_profile:"Malala"}
		]
	}
})