let oNovoReg = {};
preencherHierarquiaEmpregAtual(oNovoReg, aHierarquia);

function preencherHierarquiaEmpregAtual(oNovoReg, aHierarquia){

        //Inicialmente, vamos Limpar estes campos (vamos criar estes campos dinamicamente, e vazios (null).
        //Campos H1... até H8...
        //H1_managerial_level_code
        //H1_position_ID
        //H1_position_desc
        //H1_employee_name
        for (let index = 1; index <= 8; index++) { // Limpar campos de H1 até H8
            oNovoReg[`H${index}_managerial_level_code`]  = null;
            oNovoReg[`H${index}_position_ID`]            = null;
            oNovoReg[`H${index}_position_desc`]          = null;
            oNovoReg[`H${index}_employee_name`]          = null;
        }
        //Preencher campos hierarquia H1 até H8
        if (aHierarquia.length) {
            try {
                aHierarquia.forEach( (oHierarquia) => {
                    if (Number(oHierarquia.JobLevelCode) >= 1 && Number(oHierarquia.JobLevelCode) <= 8) {
                        oNovoReg[`H${oHierarquia.JobLevelCode}_managerial_level_code`]  = oHierarquia.JobLevelCode; //positionHierarquiaAtual || null; //oPositionHierarquiaAtual?.cust_Z_managerialLevel || null;
                        oNovoReg[`H${oHierarquia.JobLevelCode}_position_ID`]            = oHierarquia.IdPosicao;
                        oNovoReg[`H${oHierarquia.JobLevelCode}_position_desc`]          = oHierarquia.DescPosicao;
                        oNovoReg[`H${oHierarquia.JobLevelCode}_employee_name`]          = oHierarquia.Nome;
                    }
                });
            } catch (error) {
                
            }
        }

    }
