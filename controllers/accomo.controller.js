const {registAccomo} = require('../services/accomo.services');

const addAccomo = async (req,res) => {
    try{
        if(!accommodationName || 
            !roadAddress ||
            !jibunAddress ||
            !zoneCode ||
        )

        const newAccomo = await registAccomo({
            accommodationName,
            roadAddress,
            jibunAddress,
            zoneCode,
            x,
            y,
            detailAddress,
            contactNumber,
            introduction,
            service
        });
    }catch(err) {
        console.log('숙소등록 에러', err);
        return res.status(500).json({isError: true, message: '서버 오류, 숙소 등록 실패'});
    }
}