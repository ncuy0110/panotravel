
const panRef = (ref) => {
    const info = ref.current.getViewer();
    return {
        pitch: info.getPitch(),
        hfov: info.getHfov(),
        yaw: info.getYaw(),
    }
}
export default panRef;