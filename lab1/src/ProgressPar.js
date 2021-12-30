


function ProgressPar(skill,wid) {
    return (
        <div>{{skill}}
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: {{wi}};" aria-valuenow="95"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>);
}
