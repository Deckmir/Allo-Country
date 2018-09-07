
  


Vue.component('pop-up-usa', {
 
  template: `
  <div class="modal fade bd-example-modal-lg-USA" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FUSA.jpg?1535965339877">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const USA = new Vue({
  el: '#pop-USA',
   
            
});


  


Vue.component('pop-up-canada', {
 
  template: `
  <div class="modal fade bd-example-modal-lg-Canada" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FCANADA.jpg?1535965481758">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
});
              
const CANADA = new Vue({
  el: '#pop-CANADA',
   
            
});


  


Vue.component('pop-up-mexico', {

  template: `
  <div class="modal fade bd-example-modal-lg-Mexico" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FMEXICO.jpg?1535965476285">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const MEXICO = new Vue({
  el: '#pop-MEXICO',
   
            
});

Vue.component('pop-up-bahamas', {

  template: `
  <div class="modal fade bd-example-modal-lg-Bahamas" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FDrapeau-Bahamas.jpg?1536092667215">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
});
              
const BAHAMAS = new Vue({
  el: '#pop-BAHAMAS',
   
            
});


Vue.component('pop-up-cuba', {

  template: `
  <div class="modal fade bd-example-modal-lg-Cuba" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FCuba.jpg?1536092938635">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const CUBA = new Vue({
  el: '#pop-CUBA',
   
            
});


Vue.component('pop-up-haiti', {

  template: `
  <div class="modal fade bd-example-modal-lg-Haiti" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-haiti-15090-cm-.jpg?1536093229383">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
});
              
const HAITI = new Vue({
  el: '#pop-HAITI',
   
            
});

Vue.component('pop-up-dominique', {

  template: `
  <div class="modal fade bd-example-modal-lg-Dominique" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FDominique.png?1536093581123">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const DOMINIQUE = new Vue({
  el: '#pop-DOMINIQUE',
   
            
});


Vue.component('pop-up-guatemala', {

  template: `
  <div class="modal fade bd-example-modal-lg-Guatemala" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FGUATEMALA.GIF?1536093919357">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
});
              
const GUATEMALA = new Vue({
  el: '#pop-GUATEMALA',
   
            
});



Vue.component('pop-up-belize', {

  template: `
  <div class="modal fade bd-example-modal-lg-Belize" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FBelize.png?1536094134624">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const BELIZE = new Vue({
  el: '#pop-BELIZE',
   
            
});


Vue.component('pop-up-salvador', {

  template: `
  <div class="modal fade bd-example-modal-lg-Salvador" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FSalvador.png?1536094338980">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const SALVADOR = new Vue({
  el: '#pop-SALVADOR',
   
            
});

Vue.component('pop-up-honduras', {

  template: `
  <div class="modal fade bd-example-modal-lg-Honduras" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fhonduras.png?1536094651267">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const HONDURAS = new Vue({
  el: '#pop-HONDURAS',
   
            
});


Vue.component('pop-up-nicaragua', {

  template: `
  <div class="modal fade bd-example-modal-lg-Nicaragua" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FSalvador.png?1536094338980">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
         
});
  
const NICARAGUA = new Vue({
  el: '#pop-NICARAGUA',
   
            
});

Vue.component('pop-up-costa', {

  template: `
  <div class="modal fade bd-example-modal-lg-Costa" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-costa-rica.jpg?1536096457965">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const COSTA = new Vue({
  el: '#pop-COSTA',
   
            
});



Vue.component('pop-up-panama', {

  template: `
  <div class="modal fade bd-example-modal-lg-Panama" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-panama-15090-cm-.jpg?1536098848800">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const PANAMA= new Vue({
  el: '#pop-PANAMA',
   
            
});

Vue.component('pop-up-venezuela', {

  template: `
  <div class="modal fade bd-example-modal-lg-Venezuela" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fvene.png?1536251622942">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const VENEZUELA= new Vue({
  el: '#pop-VENEZUELA',
   
            
});

Vue.component('pop-up-guyana', {

  template: `
  <div class="modal fade bd-example-modal-lg-Guyana" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-guyana.jpg.png?1536251693581">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const GUYANA= new Vue({
  el: '#pop-GUYANA'
            
});

Vue.component('pop-up-suriname', {

  template: `
  <div class="modal fade bd-example-modal-lg-Suriname" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F225px-Flag_of_Suriname.svg.png?1536251770367">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const SURINAME= new Vue({
  el: '#pop-SURINAME',
   
            
});

Vue.component('pop-up-brazil', {

  template: `
  <div class="modal fade bd-example-modal-lg-Brazil" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fbrazil.jpg?1536251816938">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const BRAZIL= new Vue({
  el: '#pop-BRAZIL',
   
            
});

Vue.component('pop-up-paraguay', {

  template: `
  <div class="modal fade bd-example-modal-lg-Paraguay" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-paraguay.jpg?1536251856189">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const PARAGUYAY= new Vue({
  el: '#pop-PARAGUAY',
   
            
});

Vue.component('pop-up-uruguay', {

  template: `
  <div class="modal fade bd-example-modal-lg-Uruguay" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Furuguya.png?1536251894529">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const URUGUAY= new Vue({
  el: '#pop-URUGUAY',
   
            
});

Vue.component('pop-up-argentina', {

  template: `
  <div class="modal fade bd-example-modal-lg-Argentina" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-argentine-150x90cm-argentina-flag-bandiera.jpg?1536251946179">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const ARGENTINA= new Vue({
  el: '#pop-ARGENTINA',
   
            
});

Vue.component('pop-up-chile', {

  template: `
  <div class="modal fade bd-example-modal-lg-Chile" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fchile.png?1536251997245">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const CHILE= new Vue({
  el: '#pop-CHILE',
   
            
});

Vue.component('pop-up-bolivia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Bolivia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fbolivie.png?1536252035958">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const BOLIVIA= new Vue({
  el: '#pop-BOLIVIA',
   
            
});

Vue.component('pop-up-peru', {

  template: `
  <div class="modal fade bd-example-modal-lg-Peru" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fperu.jpg?1536252080240">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const PERU= new Vue({
  el: '#pop-PERU',
   
            
});

Vue.component('pop-up-ecuador', {

  template: `
  <div class="modal fade bd-example-modal-lg-Ecuador" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F225px-Flag_of_Ecuador.svg.png?1536252152982">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const ECUADOR= new Vue({
  el: '#pop-ECUADOR',
   
            
});

Vue.component('pop-up-colombia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Colombia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-colombie.jpg?1536252187491">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const COLOMBIA= new Vue({
  el: '#pop-COLOMBIA',
   
            
});

Vue.component('pop-up-portugal', {

  template: `
  <div class="modal fade bd-example-modal-lg-Portugal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fautocollant-drapeau-portugal.jpg?1536255842654">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const PORTUGAL= new Vue({
  el: '#pop-PORTUGAL',
   
            
});

Vue.component('pop-up-spain', {

  template: `
  <div class="modal fade bd-example-modal-lg-Spain" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fspain.jpg?1536255919854">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const SPAIN= new Vue({
  el: '#pop-SPAIN',
   
            
});

Vue.component('pop-up-france', {

  template: `
  <div class="modal fade bd-example-modal-lg-France" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FFR.jpg?1535740548514">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const FRANCE= new Vue({
  el: '#pop-FRANCE',
   
            
});

Vue.component('pop-up-united', {

  template: `
  <div class="modal fade bd-example-modal-lg-United" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Funited.jpg?1536255989918">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const UNITED= new Vue({
  el: '#pop-UNITED',
   
            
});


Vue.component('pop-up-ireland', {

  template: `
  <div class="modal fade bd-example-modal-lg-Ireland" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Firlande-7002b.gif?1536256033385">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const IRELAND= new Vue({
  el: '#pop-IRELAND',
   
            
});

Vue.component('pop-up-iceland', {

  template: `
  <div class="modal fade bd-example-modal-lg-Iceland" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Ficeland.jpg?1536256083551">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const ICELAND= new Vue({
  el: '#pop-ICELAND',
   
            
});

Vue.component('pop-up-belgium', {

  template: `
  <div class="modal fade bd-example-modal-lg-Belgium" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FDrapeau-Belgique-150-x-90-cm.jpg?1536256184227">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const BELGIUM= new Vue({
  el: '#pop-BELGIUM',
   
            
});

Vue.component('pop-up-germany', {

  template: `
  <div class="modal fade bd-example-modal-lg-Germany" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F225px-Flag_of_Germany_(state).svg.png?1536256215282">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const GERMANY= new Vue({
  el: '#pop-GERMANY',
   
            
});

Vue.component('pop-up-austria', {

  template: `
  <div class="modal fade bd-example-modal-lg-Austria" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Faustria.png?1536256267168">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const AUSTRIA= new Vue({
  el: '#pop-AUSTRIA',
   
            
});

Vue.component('pop-up-italy', {

  template: `
  <div class="modal fade bd-example-modal-lg-Italy" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fitaly.jpg?1536266563688">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const ITALY= new Vue({
  el: '#pop-ITALY',
   
            
});


Vue.component('pop-up-swiss', {

  template: `
  <div class="modal fade bd-example-modal-lg-Swiss" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fswiss.png?1536266629880">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const SWISS= new Vue({
  el: '#pop-SWISS',
   
            
});
Vue.component('pop-up-croatia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Croatia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FCivil_Ensign_of_Croatia.svg.png?1536266675827">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const CROATIA= new Vue({
  el: '#pop-CROATIA',
   
            
});

Vue.component('pop-up-norway', {

  template: `
  <div class="modal fade bd-example-modal-lg-Norway" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-colombie.jpg?1536252187491">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const NORWAY= new Vue({
  el: '#pop-NORWAY',
   
            
});

Vue.component('pop-up-sweden', {

  template: `
  <div class="modal fade bd-example-modal-lg-Sweden" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Flangfr-225px-Flag_of_Norway.svg.png?1536266732873">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const SWEDEN= new Vue({
  el: '#pop-SWEDEN',
   
            
});

Vue.component('pop-up-finland', {

  template: `
  <div class="modal fade bd-example-modal-lg-Finland" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-finlande-image_csp31762112.jpg?1536266813097">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const FINLAND= new Vue({
  el: '#pop-FINLAND',
   
            
});

Vue.component('pop-up-estonia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Estonia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F225px-Flag_of_Estonia.svg.png?1536266902218">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const ESTONIA= new Vue({
  el: '#pop-ESTONIA',
   
            
});


Vue.component('pop-up-latvia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Latvia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-lettonie.jpg?1536266974605">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const LATVIA= new Vue({
  el: '#pop-LATVIA',
   
            
});

Vue.component('pop-up-lithuania', {

  template: `
  <div class="modal fade bd-example-modal-lg-Lithuania" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-lituanie.jpg?1536267029400">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const LITHUANIA= new Vue({
  el: '#pop-LITHUANIA',
   
            
});


Vue.component('pop-up-russia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Russia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-russie.jpg?1536267074478">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const RUSSIA= new Vue({
  el: '#pop-RUSSIA',
   
            
});

Vue.component('pop-up-ukraine', {

  template: `
  <div class="modal fade bd-example-modal-lg-Ukraine" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fukraine.gif?1536267129920">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const UKRAINE= new Vue({
  el: '#pop-UKRAINE',
   
            
});

Vue.component('pop-up-romania', {

  template: `
  <div class="modal fade bd-example-modal-lg-Romania" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fromania.jpg?1536267187424">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const ROMANIA= new Vue({
  el: '#pop-ROMANIA',
   
            
});

Vue.component('pop-up-poland', {

  template: `
  <div class="modal fade bd-example-modal-lg-Poland" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fpoland.jpg?1536267234104">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const POLAND= new Vue({
  el: '#pop-POLAND',
   
            
});
Vue.component('pop-up-bulgaria', {

  template: `
  <div class="modal fade bd-example-modal-lg-Bulgaria" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-bulgarie.jpg?1536267270316">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const BULGARIA= new Vue({
  el: '#pop-BULGARIA',
   
            
});

Vue.component('pop-up-hungary', {

  template: `
  <div class="modal fade bd-example-modal-lg-Hungary" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-hongrie.jpg?1536267297755">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const HUNGARY= new Vue({
  el: '#pop-HUNGARY',
   
            
});


Vue.component('pop-up-greece', {

  template: `
  <div class="modal fade bd-example-modal-lg-Greece" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-grece-5075-cm.jpg.png?1536267359783">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const GREECE= new Vue({
  el: '#pop-GREECE',
   
            
});


Vue.component('pop-up-turkey', {

  template: `
  <div class="modal fade bd-example-modal-lg-Turkey" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F240px-Ottoman_flag.svg.png?1536269518447">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const TURKEY= new Vue({
  el: '#pop-TURKEY',
   
            
});


Vue.component('pop-up-syria', {

  template: `
  <div class="modal fade bd-example-modal-lg-Syria" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F225px-Flag_of_Syria.svg.png?1536269553568">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const SYRIA= new Vue({
  el: '#pop-SYRIA',
   
            
});


Vue.component('pop-up-iraq', {

  template: `
  <div class="modal fade bd-example-modal-lg-Iraq" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Firaq.png?1536269601291">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const IRAQ= new Vue({
  el: '#pop-IRAQ',
   
            
});


Vue.component('pop-up-georgia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Georgia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F225px-Flag_of_Georgia.svg.png?1536269652282">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const GEORGIA= new Vue({
  el: '#pop-GEORGIA',
   
            
});


Vue.component('pop-up-armenia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Armenia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-armenie-5075-cm.jpg.png?1536269693346">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const ARMENIA= new Vue({
  el: '#pop-ARMENIA',
   
            
});


Vue.component('pop-up-azerbaidjan', {

  template: `
  <div class="modal fade bd-example-modal-lg-Azerbaidjan" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-azerbaidjan.jpg?1536269739701">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const AZERBAIDJAN= new Vue({
  el: '#pop-AZERBAIDJAN',
   
            
});



Vue.component('pop-up-jordan', {

  template: `
  <div class="modal fade bd-example-modal-lg-Jordan" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fautocollant-drapeau-jordan-jordanie-sticker-flag-t.jpg?1536269783702">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const JORDAN= new Vue({
  el: '#pop-JORDAN',
   
            
});

Vue.component('pop-up-lebanon', {

  template: `
  <div class="modal fade bd-example-modal-lg-Lebanon" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Flebanon.gif?1536269827571">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const LEBANON= new Vue({
  el: '#pop-LEBANON',
   
            
});



Vue.component('pop-up-israel', {

  template: `
  <div class="modal fade bd-example-modal-lg-Israel" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fisrael.jpg?1536269871806">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const ISRAEL= new Vue({
  el: '#pop-ISRAEL',
   
            
});


Vue.component('pop-up-arabia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Arabia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Farabia.jpg?1536269906173">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const ARABIA= new Vue({
  el: '#pop-ARABIA',
   
            
});


Vue.component('pop-up-emirate', {

  template: `
  <div class="modal fade bd-example-modal-lg-Emirate" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Femirates.jpg?1536269956893">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const EMIRATE= new Vue({
  el: '#pop-EMIRATE',
   
            
});


Vue.component('pop-up-oman', {

  template: `
  <div class="modal fade bd-example-modal-lg-Oman" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Foman.jpg?1536269996660">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const OMAN= new Vue({
  el: '#pop-OMAN',
   
            
});


Vue.component('pop-up-yemen', {

  template: `
  <div class="modal fade bd-example-modal-lg-Yemen" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-yemen-5075-cm.jpg.png?1536270035752">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const YEMEN= new Vue({
  el: '#pop-YEMEN',
   
            
});

Vue.component('pop-up-northk', {

  template: `
  <div class="modal fade bd-example-modal-lg-Northk" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fnorth%20k.gif?1536310096803">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const NORTHK= new Vue({
  el: '#pop-NORTHK',
   
            
});

Vue.component('pop-up-southk', {

  template: `
  <div class="modal fade bd-example-modal-lg-Southk" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fsouth%20k.png?1536310163917">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const SOUTHK= new Vue({
  el: '#pop-SOUTHK',
   
            
});

Vue.component('pop-up-japan', {

  template: `
  <div class="modal fade bd-example-modal-lg-Japan" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fjapon.jpg?1536310194000">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const JAPAN= new Vue({
  el: '#pop-JAPAN',
   
            
});

Vue.component('pop-up-china', {

  template: `
  <div class="modal fade bd-example-modal-lg-China" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fchina.png?1536310246053">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const CHINA= new Vue({
  el: '#pop-CHINA',
   
            
});

Vue.component('pop-up-philippines', {

  template: `
  <div class="modal fade bd-example-modal-lg-Philippines" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fphilippines-31013_1280.png?1536310270354">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const PHILIPPINES= new Vue({
  el: '#pop-PHILIPPINES',
   
            
});

Vue.component('pop-up-vietnam', {

  template: `
  <div class="modal fade bd-example-modal-lg-Vietnam" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fvietnam.png?1536310310292">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const VIETNAM= new Vue({
  el: '#pop-VIETNAM',
   
            
});

Vue.component('pop-up-cambodia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Cambodia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-cambodge-histoire.jpg?1536310311111">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const CAMBODIA= new Vue({
  el: '#pop-CAMBODIA',
   
            
});

Vue.component('pop-up-laos', {

  template: `
  <div class="modal fade bd-example-modal-lg-Laos" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fsticker-drapeau-laos.jpg?1536310599197">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const LAOS= new Vue({
  el: '#pop-LAOS',
   
            
});

Vue.component('pop-up-thailand', {

  template: `
  <div class="modal fade bd-example-modal-lg-Thailand" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fthailand.png?1536310599647">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const THAILAND= new Vue({
  el: '#pop-THAILAND',
   
            
});


Vue.component('pop-up-myanmar', {

  template: `
  <div class="modal fade bd-example-modal-lg-Myanmar" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fmyanmar.png?1536310598291">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const MYANMAR= new Vue({
  el: '#pop-MYANMAR',
   
            
});

Vue.component('pop-up-bangladesh', {

  template: `
  <div class="modal fade bd-example-modal-lg-Bangladesh" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fbangladesh-162238_1280.png?1536310599320">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const BANGLADESH= new Vue({
  el: '#pop-BANGLADESH',
   
            
});

Vue.component('pop-up-nepal', {

  template: `
  <div class="modal fade bd-example-modal-lg-Nepal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fnepal.png?1536310601000">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const NEPAL= new Vue({
  el: '#pop-NEPAL',
   
            
});

Vue.component('pop-up-pakistan', {

  template: `
  <div class="modal fade bd-example-modal-lg-Pakistan" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-pakistan.jpg?1536310601106">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const PAKISTAN= new Vue({
  el: '#pop-PAKISTAN',
   
            
});

Vue.component('pop-up-afghanistan', {

  template: `
  <div class="modal fade bd-example-modal-lg-Afghanistan" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fafghanistan-858158_1280.jpg?1536310601901">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const AFGHANISTAN= new Vue({
  el: '#pop-AFGHANISTAN',
   
            
});

Vue.component('pop-up-iran', {

  template: `
  <div class="modal fade bd-example-modal-lg-Iran" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fdrapeau-iran.jpg?1536310601773">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const IRAN= new Vue({
  el: '#pop-IRAN',
   
            
});

Vue.component('pop-up-turkmenistan', {

  template: `
  <div class="modal fade bd-example-modal-lg-Turkmenistan" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FTURKMENISTAN-2001.gif?1536310601655">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const TURKMENISTAN= new Vue({
  el: '#pop-TURKMENISTAN',
   
            
});

Vue.component('pop-up-uzbekistan', {

  template: `
  <div class="modal fade bd-example-modal-lg-Uzbekistan" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fuzbekistan.jpg?1536310598995">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const UZBEKISTAN= new Vue({
  el: '#pop-UZBEKISTAN',
   
            
});

Vue.component('pop-up-kazakstan', {

  template: `
  <div class="modal fade bd-example-modal-lg-Kazakstan" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fkazaksta.png?1536310600148">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const KAZAKSTAN= new Vue({
  el: '#pop-KAZAKSTAN',
   
            
});

Vue.component('pop-up-kirghiztan', {

  template: `
  <div class="modal fade bd-example-modal-lg-Kirghiztan" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fkirghistan.png?1536310598866">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const KIRGHIZTAN= new Vue({
  el: '#pop-KIRGHIZTAN',
   
            
});

Vue.component('pop-up-takijistan', {

  template: `
  <div class="modal fade bd-example-modal-lg-Takijistan" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F1009602-Drapeau_du_Tadjikistan.jpg?1536310599850">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const TAKIJISTAN= new Vue({
  el: '#pop-TAKIJISTAN',
   
            
});

Vue.component('pop-up-mongolia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Mongolia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fmongolia.png?1536310599520">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const MONGOLIA= new Vue({
  el: '#pop-MONGOLIA',
   
            
});


Vue.component('pop-up-malaysia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Malaysia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fmalaysia.png?1536312487544">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const MALAYSIA= new Vue({
  el: '#pop-MALAYSIA',
   
            
});

Vue.component('pop-up-indonesia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Indonesia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Findonesiea.png?1536312510214">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const INDONESIA= new Vue({
  el: '#pop-INDONESIA',
   
            
});

Vue.component('pop-up-papua', {

  template: `
  <div class="modal fade bd-example-modal-lg-Papua" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fpapua.png?1536312542182">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const PAPUA= new Vue({
  el: '#pop-PAPUA',
   
            
});

Vue.component('pop-up-guina', {

  template: `
  <div class="modal fade bd-example-modal-lg-Guina" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fflag_of_ghana.png?1536312554335">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const GUINA= new Vue({
  el: '#pop-GUINA',
   
            
});

Vue.component('pop-up-australia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Australia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Faustralia.png?1536312562390">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const AUSTRALIA= new Vue({
  el: '#pop-AUSTRALIA',
   
            
});

Vue.component('pop-up-newz', {

  template: `
  <div class="modal fade bd-example-modal-lg-Newz" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fnewzealand.png?1536312477100">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const NEWZ= new Vue({
  el: '#pop-NEWZ',
   
            
});



Vue.component('pop-up-tunisia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Tunisia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F1280px-Flag_of_Tunisia.svg.png?1536342597411">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const TUNISIA= new Vue({
  el: '#pop-TUNISIA',
   
            
});


Vue.component('pop-up-morocco', {

  template: `
  <div class="modal fade bd-example-modal-lg-Morocco" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F1280px-Flag_of_Morocco.svg.png?1536342598680">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const MOROCCO= new Vue({
  el: '#pop-MOROCCO',
   
            
});


Vue.component('pop-up-algeria', {

  template: `
  <div class="modal fade bd-example-modal-lg-Algeria" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Falgerian-flag.png?1536342600134">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const ALGERIA= new Vue({
  el: '#pop-ALGERIA',
   
            
});


Vue.component('pop-up-libya', {

  template: `
  <div class="modal fade bd-example-modal-lg-Libya" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Flybian.png?1536342600940">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const LIBYA= new Vue({
  el: '#pop-LIBYA',
   
            
});


Vue.component('pop-up-egypt', {

  template: `
  <div class="modal fade bd-example-modal-lg-Egypt" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F255px-Flag_of_Egypt.svg.png?1536342601908">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const EGYPT= new Vue({
  el: '#pop-EGYPT',
   
            
});

Vue.component('pop-up-mauritania', {

  template: `
  <div class="modal fade bd-example-modal-lg-Mauritania" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F255px-Flag_of_Mauritania.svg.png?1536342603274">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const MAURITANIA= new Vue({
  el: '#pop-MAURITANIA',
   
            
});


Vue.component('pop-up-mali', {

  template: `
  <div class="modal fade bd-example-modal-lg-Mali" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fmali.png?1536342605003">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const MALI= new Vue({
  el: '#pop-MALI',
   
            
});


Vue.component('pop-up-guinea', {

  template: `
  <div class="modal fade bd-example-modal-lg-Guinea" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F1280px-Flag_of_Guinea.svg.png?1536342606379">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const GUINEA= new Vue({
  el: '#pop-GUINEA',
   
            
});


Vue.component('pop-up-coted', {

  template: `
  <div class="modal fade bd-example-modal-lg-Coted" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FFlag_of_C%C3%B4te_d'Ivoire.svg.png?1536342607750">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const COTED= new Vue({
  el: '#pop-COTED',
   
            
});

Vue.component('pop-up-niger', {

  template: `
  <div class="modal fade bd-example-modal-lg-Niger" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fniger.gif?1536342608595">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const NIGER= new Vue({
  el: '#pop-NIGER',
   
            
});


Vue.component('pop-up-chad', {

  template: `
  <div class="modal fade bd-example-modal-lg-Chad" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FFlag_of_Chad.svg.png?1536342610678">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const CHAD= new Vue({
  el: '#pop-CHAD',
   
            
});


Vue.component('pop-up-nigeria', {

  template: `
  <div class="modal fade bd-example-modal-lg-Nigeria" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fnigeria.jpg?1536342609743">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const NIGERIA= new Vue({
  el: '#pop-NIGERIA',
   
            
});

Vue.component('pop-up-central', {

  template: `
  <div class="modal fade bd-example-modal-lg-Central" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fnewzealand.png?1536312477100">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const CENTRAL= new Vue({
  el: '#pop-CENTRAL',
   
            
});

Vue.component('pop-up-sudan', {

  template: `
  <div class="modal fade bd-example-modal-lg-Sudan" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fflag_of_sudan.svg.png?1536342613154">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const SUDAN= new Vue({
  el: '#pop-SUDAN',
   
            
});




Vue.component('pop-up-eritrea', {

  template: `
  <div class="modal fade bd-example-modal-lg-Eritrea" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Feritrea.jpg?1536342613861">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const ERITREA= new Vue({
  el: '#pop-ERITREA',
   
            
});

Vue.component('pop-up-ethiopia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Ethiopia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F2000px-Flag_of_Ethiopia.svg.png?1536342615637">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const ETHIOPIA= new Vue({
  el: '#pop-ETHIOPIA',
   
            
});

Vue.component('pop-up-somalia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Somalia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F2000px-Flag_of_Somalia.svg.png?1536342616657">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const SOMALIA= new Vue({
  el: '#pop-SOMALIA',
   
            
});



Vue.component('pop-up-gabon', {

  template: `
  <div class="modal fade bd-example-modal-lg-Gabon" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F1280px-Flag_of_Gabon.svg.png?1536342617819">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const GABON= new Vue({
  el: '#pop-GABON',
   
            
});

Vue.component('pop-up-drc', {

  template: `
  <div class="modal fade bd-example-modal-lg-DRC" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F2000px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png?1536342619447">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const DRC= new Vue({
  el: '#pop-DRC',
   
            
});


Vue.component('pop-up-uganda', {

  template: `
  <div class="modal fade bd-example-modal-lg-Uganda" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fuganda.png?1536342621184">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const UGANDA= new Vue({
  el: '#pop-UGANDA',
   
            
});

Vue.component('pop-up-kenya', {

  template: `
  <div class="modal fade bd-example-modal-lg-Kenya" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F2000px-Flag_of_Kenya.svg.png?1536342622693">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const KENYA= new Vue({
  el: '#pop-KENYA',
   
            
});

Vue.component('pop-up-tanzania', {

  template: `
  <div class="modal fade bd-example-modal-lg-Tanzania" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F1280px-Flag_of_Tanzania.svg.png?1536342623178">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const TANZANIA= new Vue({
  el: '#pop-TANZANIA',
   
            
});


Vue.component('pop-up-angola', {

  template: `
  <div class="modal fade bd-example-modal-lg-Angola" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fzambia-flag-260-p_1.jpg?1536342625718">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const ANGOLA= new Vue({
  el: '#pop-ANGOLA',
   
            
});


Vue.component('pop-up-zambia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Zambia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FFlag_of_Mozambique.svg.png?1536342628163">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const ZAMBIA= new Vue({
  el: '#pop-ZAMBIA',
   
            
});

Vue.component('pop-up-mozambique', {

  template: `
  <div class="modal fade bd-example-modal-lg-Mozambique" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2FFlag_of_Mozambique.svg.png?1536342628163">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const MOZAMBIQUE= new Vue({
  el: '#pop-MOZAMBIQUE',
   
            
});

Vue.component('pop-up-zimbabwe', {

  template: `
  <div class="modal fade bd-example-modal-lg-Zimbabwe" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F1280px-Flag_of_Zimbabwe.svg.png?1536342628570">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const ZIMBABWE= new Vue({
  el: '#pop-ZIMBABWE',
   
            
});



Vue.component('pop-up-madagascar', {

  template: `
  <div class="modal fade bd-example-modal-lg-Madagascar" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F1280px-Flag_of_Madagascar.svg.png?1536342629372">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const MADAGASCAR= new Vue({
  el: '#pop-MADAGASCAR',
   
            
});


Vue.component('pop-up-southa', {

  template: `
  <div class="modal fade bd-example-modal-lg-Southa" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F2000px-Flag_of_South_Africa.svg.png?1536342630805">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const SOUTHA= new Vue({
  el: '#pop-SOUTHA',
   
            
});


Vue.component('pop-up-namibia', {

  template: `
  <div class="modal fade bd-example-modal-lg-Namibia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2Fnamibia.png?1536342631950">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const NAMIBIA= new Vue({
  el: '#pop-NAMIBIA',
   
            
});


Vue.component('pop-up-botswana', {

  template: `
  <div class="modal fade bd-example-modal-lg-Botswana" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div id="star">
         <table>
           <tr>
             <td>
               <div class="modal-header">
                <h3><slot name="header">Tourism</slot></h3>
                <star-rating ></star-rating>
              </div>
            </td>
            <td rowspan="2">
            <img class="flag" src="https://cdn.glitch.com/5453b08a-55b4-46a5-a4ec-b6d64acc3c4b%2F1280px-Flag_of_Botswana.svg.png?1536342632742">    </td>
           </tr>
           <tr>
            <td>
               <div class="modal-header">
                <h3><slot name="body">Food</slot> </h3>
                <star-rating ></star-rating>
               </div>
          </td>
          <td rowspan="2"></td>
        </tr>
        <tr>
         <td>
          <div class="modal-header">
           <h3> <slot name="footer">Price</slot> </h3>
           <star-rating ></star-rating>
          </div>
        </td>
        <td rowspan="2">
      </td>
      </tr>
     </table>
    </div>
  </div>
 </div>
</div>
  `,
  
});
              
const BOTSWANA= new Vue({
  el: '#pop-BOTSWANA',
   
            
});












