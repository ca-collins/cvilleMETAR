<div class="row">
<% stationArray.forEach(station => { %>          
    <div class="col text-center mt-5">
            <h1 class="display-4 mb-5"><%= station.Station %></h1>
            
            <p class="h3"><%= station.CloudList[0][0] %> @ <%= station.CloudList[0][1] %>k ft </p>

            <% if(station.CloudList.length >= 2) { %>

            <p class="h3"> <%= station.CloudList[1][0] %> @ <%= station.CloudList[1][1] %>k ft </p>
            
            <% } %>
            <h2 class="h4 text-muted mb-5">CLOUD COVER</h2>


            <p class="h3"><%= station.WindSpeed %> kts | <%= station.WindSpeed %>&#176;</p>
            <h2 class="h4 text-muted mb-5">WIND</h2>

            <% if(station.Visibility < 12) { %>
            <p class="h3"><%= station.Visibility %> miles</p>
            <h2 class="h4 text-muted mb-5">VISIBILITY</h2>
            <% } %>
            
            <p class="h3"><%= station.Temperature %>&#176;C</p>
            <h2 class="h4 text-muted mb-5">TEMERATURE</h2>


    </div>
        
<% }); %>

</div>  